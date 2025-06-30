import { EmbedBuilder } from "@discordjs/builders";
import { InteractionType } from "discord.js";
import { client } from "../../app";
import FailedToFetchServerStatus from "../../errors/server-status-failure";
import { Command } from "../../repositories/command";
import ServerModule from "../../repositories/server-query";
import WorkshopModule from "../../repositories/workshop";
import { log } from "../../utils/log";

const LEFT4DEAD2: string = '550';
const THESLUTSIP: string = '***';
const THESLUTSPORT: number = 27015;

const splitOnServerName = (name: string): string => name.split('| ')[1] || 'defaultCampaign';

export default new Command({
    name: 'currentmap',
    description: 'Returns a workshop map url',
    cooldown: 5000,
    run: async ({ interaction }) => {
        try {
            const serverModule = new ServerModule('left4dead2', THESLUTSIP, THESLUTSPORT);
            const currentDomainName = await serverModule.getDomainName();
            
            if(!currentDomainName) {
                throw new FailedToFetchServerStatus(THESLUTSIP);
            }
            
            const currentMapName = splitOnServerName(currentDomainName);
    
            if(currentMapName === 'defaultCampaign') {
                return interaction.followUp('The server is currently running a default campaign!');
            }
    
            const workshopModule = new WorkshopModule(LEFT4DEAD2, encodeURI(currentMapName));
            const { image, url, title, children } = await workshopModule.queryWorkshop();
    
            const workshopUrlsEmbed = new EmbedBuilder()
                .setColor([
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256), 
                    Math.floor(Math.random() * 256)
                ])
                .setTitle(title)
                .setImage(image)
                .addFields(
                    { name: 'Browser', value: url },
                    { name: 'Steamapp', value: `steam://openurl/${url}`, inline: false },
                )
                .setTimestamp()
                .setFooter({
                     text: `Response latency: ${Date.now() - interaction.createdTimestamp} ms`,
                    iconURL: 'attachment://l4dicon.webp'
                });
    
            if(children) {
                let counter = 1;
                let browserFieldValue = `[${currentMapName}-${counter}](${url})`;
                let steamAppFieldValue = `steam://openurl/${url}`;
                children.forEach((childUrl) => {
                    counter+= 1;
                    browserFieldValue+= '\n' + `[${currentMapName}-${counter}](${childUrl})`
                    steamAppFieldValue+= '\n' + `steam://openurl/${childUrl}`
                });
    
                workshopUrlsEmbed.setDescription(`It seems ${currentMapName} has **other required items**: `);
                workshopUrlsEmbed.setFields(
                    { name: 'Browser:', value: browserFieldValue },
                    { name: 'Steamapp:', value: steamAppFieldValue },
                );
            }
    
            return interaction.followUp({
                embeds: [workshopUrlsEmbed],
                ephemeral: false,
                files: [{
                    attachment: './icons/l4dicon.webp',
                    name: 'l4dicon.webp',
                }]
            });

        } catch(err) {
            log.error('Failed on current map fetch', err);
            if(err instanceof FailedToFetchServerStatus) return interaction.followUp(err.message);

            return interaction.followUp('Something went wrong. . .');
        }
    }
});