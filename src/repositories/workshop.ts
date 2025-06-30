import axios from 'axios';
import { childMods, WorkshopMod } from '../types/workshop';
import { log } from '../utils/log';

export default class WorkshopModule {
    private readonly apiKey: string | undefined = process.env.STEAM_API_KEY;
    private readonly workshopApiUrl: string = 'https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?';

    private appId: string;
    private workshopQuery: string;

    constructor(appId: string, workshopQuery: string) {
        this.appId = appId;
        this.workshopQuery = workshopQuery;
    }

    public async queryWorkshop(): Promise<WorkshopMod> {
        const formatedEndpoint = `${this.workshopApiUrl}` +
        `key=${this.apiKey}&`         +
        `appId=${this.appId}&`    +
        `search_text=${this.workshopQuery}&`   +
        `return_metadata=true&`   +
        `requiredtags[0]=Campaigns&` +
        `requiredtags[1]=Co-op&` +
        `return_children=true&`  +
        `match_all_tags=false&` +
        `page=1`;

        log.info(`Formated workshop query: ${formatedEndpoint}`);
    
        const {data: {response}}  = await axios.get(formatedEndpoint);
        const { publishedfiledetails: workshopModData } = response;

        log.info(`Found an item of name: ${workshopModData[0].title} and containing the following file: ${workshopModData[0].filename}`);

        const subMods = workshopModData[0].children ? this.retrieveChildrenUrls(workshopModData[0].children) : null;
    
        return {
            title: workshopModData[0].title,
            image: workshopModData[0].preview_url,
            children: subMods,
            url: `https://steamcommunity.com/sharedfiles/filedetails/${workshopModData[0].publishedfileid}`
        }
    }

    private retrieveChildrenUrls(children: childMods[]): string[] {
        return children.map((child) => (`https://steamcommunity.com/sharedfiles/filedetails/${child.publishedfileid}`))
    }
}