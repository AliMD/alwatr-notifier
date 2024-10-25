import {HttpStatusCodes, type NanotronClientRequest} from 'alwatr/nanotron';

import {logger} from '../config.js';

export async function categoryTitleValidation(this: NanotronClientRequest<{body: JsonObject}>): Promise<void> {
  logger.logMethodArgs?.('categoryTitleValidation', {body: this.sharedMeta.body});

  if (this.sharedMeta.body.title === undefined || typeof this.sharedMeta.body.title !== 'string') {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
    this.serverResponse.replyJson({
      ok: false,
      errorCode: 'invalid_body_params_format',
      errorMessage: 'The title of category is invalid.',
    });
  }
}
