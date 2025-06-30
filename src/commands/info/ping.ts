import { client } from "../../app";
import { Command } from "../../repositories/command";

export default new Command({
    name: 'ping',
    description: 'replies with pong',
    cooldown: 5000,
    run: async ({ interaction }) => {
        interaction.followUp(`Pong! Latency is ${Date.now() - interaction.createdTimestamp} ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
});