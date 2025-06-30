import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../repositories/command";
import ServerModule from "../../repositories/server-query";
import { Type }  from 'gamedig';
import { IP_PORT_REGEX } from "../../utils/constants";
import StatusEmbedHandler from "../../utils/status-embed-handler";
import { log } from "../../utils/log";

export default new Command({
    name: 'staticquery',
    description: 'Returns the current stat of a server',
    options: [
        {
            name: 'gametype',
            description: 'The type of the game listed on gamedig.js, you can use /searchgametype to find one',
            required: true,
            type: ApplicationCommandOptionType.String,

        },
        {
            name: 'serverip',
            description: 'The IP of the server to query.',
            required: true,
            type: ApplicationCommandOptionType.String,
        },
    ],
    cooldown: 5000,
    run: async ({ interaction }) => {
        if (interaction.isChatInputCommand()) {
                try {
                    const gameType = interaction.options.getString('gametype');
                    let serverIp = interaction.options.getString('serverip');
                    let serverPort: number | undefined;
                    let specifiedPort: string;

                    if(!gameType || !serverIp || !IP_PORT_REGEX.test(serverIp) ){
                        return interaction.followUp({ content: 'Must provide a valid ip and/or gametype!', ephemeral: true });
                    }

                    if(serverIp!.includes(':')) {
                        [serverIp, specifiedPort] = serverIp!.split(':');
                        serverPort = parseInt(specifiedPort);
                    }
            
                    log.info(`Attempting to query ip ${serverIp}:${serverPort  || '*'}`);
                    const serverModule = new ServerModule(gameType as Type, serverIp!, serverPort);
                    const serverStatus = await serverModule.getServerInfo();

                    const serverStatusReply = serverStatus ? 
                        StatusEmbedHandler.handleSuccessFulResponse(serverStatus!, interaction) :
                        StatusEmbedHandler.handleFailedResponse(interaction);

            
                    return interaction.followUp(serverStatusReply);
                } catch (err) {
                    log.error('Failed on static query: ', err);        
                    return interaction.followUp('Something went wrong. . .');                    
                }
            }
        }
});