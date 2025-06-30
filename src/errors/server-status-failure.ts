export default class FailedToFetchServerStatus extends Error {
    constructor(serverIp: string) {
        super(`Could not fetch status for ip: ${serverIp}`)
        this.name = 'FailedToFetchServerStatusError';
    }
}