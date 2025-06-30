import { ApplicationCommandOptionType, DiscordAPIError, Message } from "discord.js";
import { Command } from "../../repositories/command";
import ServerModule from "../../repositories/server-query";
import { Type }  from 'gamedig';
import { DEFAULT_INTERVAL, intervalOptions, IP_PORT_REGEX } from "../../utils/constants";
import StatusEmbedHandler from "../../utils/status-embed-handler";
import { log } from "../../utils/log";

export default new Command({
    name: 'dynamicquery',
    description: 'Creates a message that is edited every 2 minutes by default, displaying the server status.',
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
        {
            name: 'interval',
            description: 'Select a longer interval if needed',
            required: false,
            type: ApplicationCommandOptionType.Number,
            choices: intervalOptions,
        }
    ],
    cooldown: 5000,
    run: async ({ interaction }) => {
        if (interaction.isChatInputCommand()) {
                try {
                    const INTERACTION_ID = interaction.id;
                    const gameType = interaction.options.getString('gametype');
                    let serverIp = interaction.options.getString('serverip');
                    let serverPort: number | undefined;
                    let specifiedPort: string;
                    let selectedInterval = interaction.options.getNumber('interval');

                    if(!gameType || !serverIp || !IP_PORT_REGEX.test(serverIp) ){
                        return interaction.followUp({ content: 'Must provide a valid ip and/or gametype!', ephemeral: true });
                    }

                    if(serverIp!.includes(':')) {
                        [serverIp, specifiedPort] = serverIp!.split(':');
                        serverPort = parseInt(specifiedPort);
                    }

                    log.info(`${interaction.user.username} successfully initiated a dynamic query for server: ${serverIp}`);

                    log.trace('Interaction token for the dynamic query:', interaction.token);
            
                    log.info(`Attempting first query to ip ${serverIp}:${serverPort  || '*'}`);
                    const serverModule = new ServerModule(gameType as Type, serverIp!, serverPort);
                    const serverStatus = await serverModule.getServerInfo();

                    const serverStatusReply = serverStatus ? 
                        StatusEmbedHandler.handleSuccessFulResponse(serverStatus!, interaction) :
                        StatusEmbedHandler.handleFailedResponse(interaction);
            
                    await interaction.deleteReply();
                    const initalMessageData = await interaction.channel!.send(serverStatusReply);

                    var continuoslyExecuteQuery = setInterval(async (): Promise<void> => {
                        const serverStatus = await serverModule.getServerInfo();

                        const serverStatusReply = serverStatus ? 
                            StatusEmbedHandler.handleSuccessFulResponse(serverStatus!, interaction) :
                            StatusEmbedHandler.handleFailedResponse(interaction);

                        await interaction.channel!.messages.edit(initalMessageData.id, serverStatusReply).catch(error => {
                            // Only log the error if it is not an 'Unknown Message' error
                            if (error.code !== 10008) {
                                log.error('Error not related to message deletion:', error);
                                return continuoslyExecuteQuery;
                            }
                            log.info(`The dynamic query of id: ${INTERACTION_ID} for ip: ${serverIp} was deleted.`);
                            clearInterval(continuoslyExecuteQuery)
                            return;
                        });
                    }, selectedInterval || DEFAULT_INTERVAL)
                } catch (err) {
                    log.error('Failed on dynamic query: ', err.message);        
                    return interaction.followUp('Something went wrong. . .');                    
                }
            }
        }
});