import fs from 'fs';

export default class JsonUtils {
    public static async appendToJson(): Promise<any> {
        if(fs.existsSync(`${__dirname}/../currently-running.json`)) {
            return JSON.parse(fs.readFileSync(`${__dirname}/../currently-running.json`, 'utf-8'));
        }
    }
    
}