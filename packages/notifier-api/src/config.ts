import {createLogger, packageTracer} from 'alwatr/nanolib';
import {Region, StoreFileType, type AlwatrNitrobaseConfig, type StoreFileStat} from 'alwatr/nitrobase';

import type {NanotronApiServerConfig, HashGeneratorConfig} from 'alwatr/nanotron';
import type {PollingOptions, ApiClientOptions} from 'grammy';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

export const logger = /* #__PURE__ */ createLogger(__package_name__);

const env = /* #__PURE__ */ (() => {
  const devConfig = {
    dbPath: './db',
    tokenSecret: 'DEV_SECRET',
    host: '0.0.0.0',
    port: 8000,
    botToken: 'BOT_TOKEN',
    botUsername: 'BOT_USERNAME',
    botFirstName: 'BOT_FIRST_NAME',
    dropPendingUpdates: '1',
    botAdminChatId: 'ADMIN_CHAT_ID',
    adminToken: 'ADMIN_TOKEN',

  } as const;

  const env_ = {
    ...process.env,
    ...(__dev_mode__ ? devConfig : {}),
  };

  for (const key in devConfig) {
    if (!Object.hasOwn(devConfig, key)) continue;
    if (!Object.hasOwn(env_, key)) throw new Error(`${key} required in production.`);
  }

  return env_;
})();

export const config = {
  adminToken: env.adminToken!,

  nanotronApiServer: {
    host: env.host!,
    port: +env.port!,
    prefix: '/api/',
  } as NanotronApiServerConfig,

  nitrobase: {
    config: {
      rootPath: env.dbPath!,
    } as AlwatrNitrobaseConfig,

    categoryCollection: {
      name: 'categories',
      region: Region.Managers,
      type: StoreFileType.Collection,
    } as StoreFileStat,
  } as const,

  telegramBot: {
    token: env.botToken!,
    clientOption: {} as ApiClientOptions,
    startOption: {
      drop_pending_updates: true,
      allowed_updates: ['message'],
    } as PollingOptions,
  } as const,

  hashGenerator: {
    algorithm: 'sha1',
    crcLength: 3,
    encoding: 'hex',
    prefix: 'ca' // caTEGORY
  } as HashGeneratorConfig,
} as const;

__dev_mode__: logger.logProperty?.('config', config);
