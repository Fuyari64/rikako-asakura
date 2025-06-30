import { CommandInteractionOptionResolver } from 'discord.js';
import { client } from '../app';
import { Event } from '../repositories/event';
import { ExtendedInteraction } from '../types/command';

export default new Event('interactionCreate', async (interaction) => {
    // Chat Input Commands
    if(interaction.isChatInputCommand()) {
        await interaction.deferReply()
        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.followUp('You have used a non existent command. It might have been deleted...');
        
        command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
        })
    }
})