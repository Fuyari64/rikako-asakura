# Rikako Asakura
# Description

Scuffed bot created just as a fallback in case another bot used by one of my servers failed miserably, also fetches maps from l4d2 workshop, that is, assuming the server displays the current map on the server display name. There is probably a better solution I just never bothered to think too hard about it as this was created for a specific server.

## How to use

First you'll need to create an environment file named `.env` at the root of the repository locally or in the server you intend to run this on. It should have the following format:

```
BOT_TOKEN='The bot token associated, you'll need to create a bot on discord.com/developer/applications'
GUILD_ID='The id of the server you want to register the commands to, this only has to be done once per server.'
STEAM_API_KEY='A steam API key'
APP_ID='The app ID you'll get when creating the applicaton on discord.com'
```
Secondly, if you want to use the /currentmap command, you'll need to manually add the ip of the server you want to query to the **l4d2maps.ts** file under line 11, I know this should be an environment variable but I'm too lazy to do that right now.

After all of the above is set, simply run an npm install. The bot was created using **node v16.13.2**
```
npm install
```

Run the build script to create a dist folder:
```
npm run build
```

Then you may start the bot with the preferred environment, assuming you'll want this running on a server somewhere, you shall use prod:
```
npm run start:prod
```