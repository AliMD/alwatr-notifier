import {logger} from '../config.js';
import {notifyValidation} from '../handler/notify-validation.js';
import {parseBodyAsJson} from '../handler/parse-body-as-json.js';
import {notifyTelegram} from '../lib/notifyTelegram.js';
import {nanotronApiServer} from '../lib/server.js';

import type {NotifyOption} from '../type.js';

nanotronApiServer.defineRoute<{body: NotifyOption}>({
  method: 'POST',
  url: 'notify',
  preHandlers: [parseBodyAsJson, notifyValidation],
  async handler() {
    logger.logMethod?.('notifyRoute');

    const notifyOption = this.sharedMeta.body;
    notifyTelegram(notifyOption); // no need to await

    this.serverResponse.replyJson({
      ok: true,
    });
  },
});
