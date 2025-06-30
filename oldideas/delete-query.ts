import axios, { AxiosRequestHeaders } from "axios";
import { ApplicationCommandOptionType } from "discord.js";
import { client } from "../src/app";
import { Command } from "../src/repositories/command";

export default new Command({
    name: 'deletequery',
    description: 'Creates a message that is edited every 2 minutes with the server status.',
    options: [
        {
            name: 'interaction-token',
            description: 'The interaction token for the dynamic query you want to delete.',
            required: true,
            type: ApplicationCommandOptionType.String,

        },
    ],
    cooldown: 5000,
    run: async ({ interaction }) => {
        if(!interaction.isChatInputCommand()) return;
        try {
            const interactionToken = interaction.options.getString('interactionToken');

            const headers: AxiosRequestHeaders = {
                Authorization: `Bearer ${process.env.BOT_TOKEN}`
            }
            
            client.fetchWebhook(client.user?.id!, interactionToken!)

            return await axios.delete(`https://discordapp.com/api/webhooks/${process.env.APP_ID}/${interactionToken}/messages/@original`, headers);
        } catch(err) {
            console.log('Something went wrong on delete query' ,err.message);
            return await interaction.followUp('Something went wrong, are you sure this is the correct token?');
        }
    }
});