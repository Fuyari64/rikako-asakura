declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_TOKEN: string,
            GUILD_ID: string,
            STEAM_API_KEY: string,
        }
    }
}

export {};