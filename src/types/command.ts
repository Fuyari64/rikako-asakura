import { AutocompleteInteraction, ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, GuildMember } from "discord.js";
import { ExtendedClient } from "../repositories/client";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

export interface ExtendedAutocompleteInteraction extends AutocompleteInteraction {
    member: GuildMember;
}

interface RunOptions {
    client: ExtendedClient,
    interaction: ExtendedInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    cooldown: number;
    run: RunFunction;
} & ChatInputApplicationCommandData