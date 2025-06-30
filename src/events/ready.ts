import { Event } from '../repositories/event';

export default new Event('ready', () => {
    console.log('Bot is online');
})