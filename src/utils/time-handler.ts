import { ONE_HOUR_IN_MS } from "./constants";

export default class TimeHandler {
    public static convertNumToTime(createdAt: number): string {
        createdAt = Math.round(this.getUptime(createdAt) * 1e2) / 1e2;
        const hour = Math.floor(createdAt);
        let decpart = createdAt - hour;
    
        const min = 1 / 60;
        decpart = min * Math.round(decpart / min);
    
        let minute = Math.floor(decpart * 60) + '';

        if (minute.length < 2) {
            minute = '0' + minute; 
        }
        return hour + ':' + minute;
    }

    private static getUptime = (createdAt: number):number => ((Date.now() - createdAt) / ONE_HOUR_IN_MS);
}