import {fetchJson, type FetchOptions} from 'alwatr/nanolib';

import { logger } from './logger.js';

export class TelegramMessageSender {
  private config__: Partial<FetchOptions> =  {
    method: 'POST',
  }

  constructor(config: Partial<FetchOptions>) {
    this.config__ = {...config};
  }

  async notify(categoryId: string, message: string, markdown?: true) {
    logger.logMethodArgs?.('notify', {categoryId, message, markdown});

    const response = await fetchJson({
      ...this.config__,
      bodyJson: {
        categoryId,
        message,
        markdown
      }
    } as FetchOptions);

    if (response.ok === false) {
      logger.incident?.('notify', 'notifying_message_failed', {response});
    }
  }
}
