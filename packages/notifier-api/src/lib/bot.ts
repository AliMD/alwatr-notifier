import {Bot} from 'grammy';

import {config, logger} from '../config.js';

export const bot = new Bot(config.telegramBot.token, {client: config.telegramBot.clientOption});

bot.start({
  ...config.telegramBot.startOption,
  onStart(botInfo) {
    logger.logProperty?.('botInfo', botInfo);
  },
});

bot.catch(async (error) => {
  logger.error('bot.catch', 'unexpected_error', error);
});
