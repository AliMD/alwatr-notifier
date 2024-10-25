import {HttpStatusCodes} from 'alwatr/nanotron';

import {config, logger} from '../config.js';
import {parseBodyAsJson} from '../handler/parse-body-as-json.js';
import {bot} from '../lib/bot.js';
import {alwatrNitrobase} from '../lib/nitrobase.js';
import {nanotronApiServer} from '../lib/server.js';

import type { GrammyError } from 'grammy';

nanotronApiServer.defineRoute<{body: JsonObject}>({
  method: 'POST',
  url: 'notify',
  preHandlers: [parseBodyAsJson],
  async handler() {
    logger.logMethod?.('notify');

    const body = this.sharedMeta.body;

    const categoryId = body.category;
    if (categoryId === undefined || typeof categoryId !== 'string') {
      this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
      this.serverResponse.replyJson({
        ok: false,
        errorCode: 'category_required',
        errorMessage: 'Category is required.',
      });
      return;
    }

    const message = body.message;
    if (message === undefined || typeof message !== 'string') {
      this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
      this.serverResponse.replyJson({
        ok: false,
        errorCode: 'message_required',
        errorMessage: 'Message is required.',
      });
      return;
    }

    const categoriesCollection = await alwatrNitrobase.openCollection<Category>(config.nitrobase.categoriesCollection);

    if (categoriesCollection.hasItem(categoryId) === false) {
      this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
      this.serverResponse.replyJson({
        ok: false,
        errorCode: 'category_not_found',
        errorMessage: 'Category not found.',
      });
      return;
    }

    this.serverResponse.replyJson({
      ok: true,
    });

    const members = categoriesCollection.getItemData(categoryId).members;
    for (let i = members.length - 1; i >= 0; i--) {
      const member = members[i];
      try {
        await bot.api.sendMessage(member.id, message, {
          parse_mode: body.markdown === true ? 'MarkdownV2' : undefined,
        });
      }
      catch (error_) {
        const error = error_ as GrammyError;
        logger.error('sendMessage', 'error_send_message', error, {member, categoryId, message});

        // Remove if blocked
        if (error.error_code === 403) {
          const memberIndex = members.findIndex((member_) => member_ === member);
          members.splice(memberIndex, 1);
          categoriesCollection.save();
        }
      }
    }
  },
});

