import gamedig from 'gamedig';
import { QueryResult, Type } from 'gamedig';
import { GAMEDIG_ATTEMPTS } from '../utils/constants';
import { log } from '../utils/log';

export default class ServerModule {
    private port: number | undefined;
    private address: string;
    private gameType: Type;
    
    constructor(gameType: Type, address: string, port?: number) {
        this.address = address;
        this.gameType = gameType;
        this.port = port;
    }

    async getServerInfo(): Promise<QueryResult | null> {
        try {
            return await gamedig.query({
                type: this.gameType,
                host: this.address,
                port: this.port,
                maxAttempts: GAMEDIG_ATTEMPTS,
            });
        } catch (err) {
            log.trace(`Failed while fetching status for the ip: ${this.address}`, err.message);
            return null;
        }
    }

    async getDomainName(): Promise<string | null> {
        try {
            const data = gamedig.query({
                type: this.gameType,
                host: this.address,
                port: this.port,
                maxAttempts: GAMEDIG_ATTEMPTS,
            });

            return (await data).name;
        } catch (err) {
            log.error('Failed while fetching domain name for left 4 dead 2', err.message);
            return null;
        }
    }
}