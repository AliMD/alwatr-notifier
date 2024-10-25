import {HttpStatusCodes, type NanotronClientRequest} from 'alwatr/nanotron';

import {config, logger} from '../config.js';
import {getAuthBearer} from '../lib/get-auth-bearer.js';

export async function requireAccessToken(this: NanotronClientRequest): Promise<void> {
  const token = getAuthBearer(this.headers.authorization);
  logger.logMethodArgs?.('requireAccessToken', {token});

  if (token === null) {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_401_Unauthorized;
    this.serverResponse.replyErrorResponse({
      ok: false,
      errorCode: 'authorization_required',
      errorMessage: 'Authorization token required',
    });
    return;
  }

  if (token !== config.accessToken) {
    this.serverResponse.statusCode = HttpStatusCodes.Error_Client_403_Forbidden;
    this.serverResponse.replyErrorResponse({
      ok: false,
      errorCode: 'access_denied',
      errorMessage: 'Access denied, token is invalid!',
    });
  }
}
