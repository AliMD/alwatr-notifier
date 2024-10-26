import {fetchJson, type FetchOptions} from 'alwatr/nanolib';

import { logger } from './logger.js';

export class TelegramMessageSender {
  private config__: Partial<FetchOptions> =  {
    method: 'POST',
  }

  constructor(config: Partial<FetchOptions>) {
    this.config__ = {...config};
  }

  async send(categoryId: string, message: string, markdown?: true) {
    logger.logMethodArgs?.('send', {categoryId, message, markdown});

    const response = await fetchJson({
      ...this.config__,
      bodyJson: {
        categoryId,
        message,
        markdown
      }
    } as FetchOptions);

    if (response.ok === false) {
      logger.incident?.('send', 'sending_message_failed', {response});
    }
  }
}
