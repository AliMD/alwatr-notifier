import {HttpStatusCodes, type NanotronClientRequest} from 'alwatr/nanotron';

import {config, logger} from '../config.js';

export async function adminValidation(this: NanotronClientRequest<{body: JsonObject}>): Promise<void> {
  logger.logMethodArgs?.('adminValidation', {body: this.sharedMeta.body});

  if (this.sharedMeta.body.adminToken === undefined || typeof this.sharedMeta.body.adminToken !== 'string') {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_400_Bad_Request;
    this.serverResponse.replyJson({
      ok: false,
      errorCode: 'invalid_body_params_format',
      errorMessage: 'Invalid body params',
    });
    return;
  }

  if (this.sharedMeta.body.adminToken !== config.adminToken) {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_403_Forbidden;
    this.serverResponse.replyJson({
      ok: false,
      errorCode: 'invalid_admin_token',
      errorMessage: 'Token is invalid.',
    });
  }
}
