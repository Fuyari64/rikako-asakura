import { EmbedBuilder } from "@discordjs/builders";
import { Player } from "gamedig";

interface FileAttachment {
    attachment: string,
    name: string,
};

export interface PlayerRaw {
    score?: number
};

export interface ServerStatusReplyObject {
    embeds: EmbedBuilder[],
    ephemeral: boolean,
    files: FileAttachment[]
};