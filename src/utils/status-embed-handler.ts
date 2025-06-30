import { EmbedBuilder } from "@discordjs/builders"
import { RGBTuple } from "discord.js";
import { QueryResult } from "gamedig"
import { ExtendedInteraction } from "../types/command";
import { PlayerRaw, ServerStatusReplyObject } from "../types/status";
import TimeHandler from "./time-handler";

export default class StatusEmbedHandler {

    private static readonly RED_EMBED: RGBTuple = [255, 0, 0];

    private static randomColors = (): RGBTuple => [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

    private static customSort = (a: string, b: string) => (Number(a.match(/\[(.*?)\]/)![1]) - Number((b.match(/\[(.*?)\]/)![1])));

    public static handleSuccessFulResponse = (serverStatus: QueryResult, interaction: ExtendedInteraction): ServerStatusReplyObject => {
        const serverStatusEmbed = new EmbedBuilder()
            .setColor(this.randomColors())
            .setTitle(serverStatus.name)
            .setDescription(`Playing ${serverStatus.map} with ${serverStatus.players.length}/${serverStatus.maxplayers} players` + '\n' + `Connect with steam://connect/${serverStatus.connect}`)
            .setTimestamp()
            .setFooter({
                    text: `Command uptime: ${TimeHandler.convertNumToTime(interaction.createdTimestamp)} hours`,
                    iconURL: 'attachment://success.png',
            });
    
        let playerList: string[] = [];
        serverStatus.players.forEach((player) => {
            if (player.raw && Object.keys(player.raw).length) {
                const rawInfo = player.raw as PlayerRaw;
                playerList.push(`${player.name!}\[${rawInfo.score}\]`);
            } else if (player.name) {
                playerList.push(`${player.name!}`);
            }
        });

        playerList = playerList.sort(this.customSort).reverse();
    
        const saveLength = playerList.length;
        while (playerList.length > 0) {
            serverStatusEmbed.addFields(
                { name: '\u200b', value: playerList.splice(0, Math.round(saveLength / 2)).join('\n'), inline: true }
            );
        }
    
        return {
            embeds: [serverStatusEmbed],
            ephemeral: false,
            files: [{
                attachment: './icons/connection-success.png',
                name: 'success.png',
            }]
        }
    };

    public static handleFailedResponse = (interaction: ExtendedInteraction): ServerStatusReplyObject => {
        'attachment://image.png'
        const serverStatusEmbed = new EmbedBuilder()
            .setColor(this.RED_EMBED)
            .setTitle('**Server not responding**')
            .setTimestamp()
            .setFooter({
                    text: `Command uptime: ${TimeHandler.convertNumToTime(interaction.createdTimestamp)} hours`,
                    iconURL: 'attachment://failure.png',
            });
        
        return {
            embeds: [serverStatusEmbed],
            ephemeral: false,
            files: [{
                attachment: './icons/connection-failure.png',
                name: 'failure.png',
            }]
        };
    };
    
}