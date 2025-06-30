import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../repositories/command";
import { gameTypeList } from "../../utils/constants";

export default new Command({
    name: 'searchgametype',
    description: 'Attempts to find a gamedig.js game type',
    cooldown: 5000,
    options: [
        {
            name: 'gamename',
            description: 'The name of the game you wish to find the id for.',
            required: true,
            type: ApplicationCommandOptionType.String
        },
    ],
    run: async ({ interaction }) => {
        if (interaction.isChatInputCommand()) {
                const gameName = interaction.options.getString('gamename');
                let nameList: string[] = [];
                gameTypeList.forEach((gameTypeObj) => {
                const probableMatch = gameTypeObj.name!.trim().toLocaleLowerCase().includes(gameName!);
                    if(probableMatch){
                        nameList.push(gameTypeObj.value);
                    }
                });
            
            if (!nameList.length) return await interaction.followUp({content:'Couldn\'t find anything :/, try a search with spaces as in `team fortress` and not `teamfortress`', ephemeral: true});
            return await interaction.followUp({content: `Did you mean any of the following: \`${nameList}\``, ephemeral: true});
        }
    }
});



