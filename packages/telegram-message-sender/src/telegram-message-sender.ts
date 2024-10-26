import {fetchJson, type FetchOptions} from 'alwatr/nanolib';

import {logger} from './logger.js';

interface Config {
  apiBaseUrl: string;
  categoryId: string;
  accessToken: string;
}

interface NotifyOption {
  categoryId?: string;
  markdown?: true
}

export class TelegramMessageSender {
  private config__: Config

  constructor(config: Config) {
    this.config__ = {...config};
  }

  async notify(message: string, option?: NotifyOption) {
    logger.logMethodArgs?.('notify', {message, option});

    if (option?.categoryId !== undefined) {
      this.config__.categoryId = option.categoryId;
    }

    const response = await fetchJson({
      url: this.config__.apiBaseUrl + '/notify',
      method: 'POST',
      bodyJson: {
        message,
        categoryId: this.config__.categoryId,
        markdown: option?.markdown ?? false
      }
    } as FetchOptions);

    if (response.ok === false) {
      logger.incident?.('notify', 'notifying_message_failed', {response});
    }
  }
}
