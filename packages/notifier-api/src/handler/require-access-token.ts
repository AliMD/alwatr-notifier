import {HttpStatusCodes, type NanotronClientRequest} from 'alwatr/nanotron';

import {logger} from '../config.js';
import {getAuthBearer} from '../lib/get-auth-bearer.js';

export const requireAccessToken = (accessToken: string) =>
  async function requireAccessToken_(this: NanotronClientRequest): Promise<void> {
    const userToken = getAuthBearer(this.headers.authorization);
    logger.logMethodArgs?.('requireAccessToken', {userToken});

    if (userToken === null) {
      this.serverResponse.statusCode = HttpStatusCodes.Error_Client_401_Unauthorized;
      this.serverResponse.replyErrorResponse({
        ok: false,
        errorCode: 'authorization_required',
        errorMessage: 'Authorization token required',
      });
      return;
    }

    if (userToken !== accessToken) {
      this.serverResponse.statusCode = HttpStatusCodes.Error_Client_403_Forbidden;
      this.serverResponse.replyErrorResponse({
        ok: false,
        errorCode: 'access_denied',
        errorMessage: 'Access denied, token is invalid!',
      });
    }
  };
