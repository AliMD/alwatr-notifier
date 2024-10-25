import {config, logger} from '../config.js';
import {bot} from './bot.js';
import {alwatrNitrobase} from './nitrobase.js';

import type {Category, NotifyOption} from '../type.js';
import type {GrammyError} from 'grammy';

/**
 * Send a message to all members of the `categoryId`.
 */
export async function notifyTelegram(option: NotifyOption): Promise<void> {
  logger.logMethodArgs?.('notifyTelegram', option);
  const categoriesCollection = await alwatrNitrobase.openCollection<Category>(config.nitrobase.categoriesCollection);
  const members = categoriesCollection.getItemData(option.categoryId).members;
  for (let i = members.length - 1; i >= 0; i--) {
    const member = members[i];
    try {
      await bot.api.sendMessage(member.id, option.message, {
        parse_mode: option.markdown ? 'MarkdownV2' : undefined,
      });
    }
    catch (error_) {
      const error = error_ as GrammyError;
      logger.error('sendMessage', 'error_send_message', error, option);

      // Remove if blocked
      if (error.error_code === 403) {
        const memberIndex = members.indexOf(member);
        if (memberIndex === -1) {
          logger.accident?.('notifyTelegram', 'unexpected_member_not_found_to_remove', {member, members});
        }
        members.splice(memberIndex, 1);
        categoriesCollection.save();
      }
    }
  }
  logger.logStep?.('notify', 'done');
}
