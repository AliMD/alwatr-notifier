import {HttpStatusCodes, type NanotronClientRequest} from 'alwatr/nanotron';

import {config, logger} from '../config.js';
import {alwatrNitrobase} from '../lib/nitrobase.js';

import type {Category, NotifyOption} from '../type.js';

export async function notifyValidation(this: NanotronClientRequest<{body: JsonObject}>): Promise<void> {
  logger.logMethodArgs?.('notifyValidation', {body: this.sharedMeta.body});

  const {categoryId, message, markdown} = this.sharedMeta.body;

  if (categoryId === undefined || typeof categoryId !== 'string') {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
    this.serverResponse.replyJson({
      ok: false,
      errorCode: 'category_required',
      errorMessage: 'Category is required.',
    });
    return;
  }

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

  // just for type validation
  (this.sharedMeta.body as NotifyOption) = {
    categoryId,
    message,
    markdown: markdown === true,
  };
}
