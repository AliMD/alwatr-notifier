import {getEnv} from '@alwatr/env';
import {createLogger, packageTracer} from 'alwatr/nanolib';
import {Region, StoreFileType, type AlwatrNitrobaseConfig, type StoreFileStat} from 'alwatr/nitrobase';

import type {NanotronApiServerConfig} from 'alwatr/nanotron';
import type {PollingOptions, ApiClientOptions} from 'grammy';

__dev_mode__: packageTracer.add(__package_name__, __package_version__);

export const logger = /* #__PURE__ */ createLogger(__package_name__);

export const config = {
  accessToken: getEnv({name: 'accessToken', developmentValue: 'ADMIN_TOKEN'}),

  nanotronApiServer: {
    host: getEnv({name: 'host', developmentValue: '0.0.0.0'}),
    port: +getEnv({name: 'port', developmentValue: '8000'}),
    prefix: '/api/',
  } as NanotronApiServerConfig,

  nitrobase: {
    config: {
      rootPath: getEnv({name: 'dbPath', developmentValue: './db'}),
    } as AlwatrNitrobaseConfig,

    categoryCollection: {
      name: 'categories',
      region: Region.Managers,
      type: StoreFileType.Collection,
    } as StoreFileStat,
  } as const,

  telegramBot: {
    token: getEnv({name: 'botToken', developmentValue: 'BOT_TOKEN'}),
    clientOption: {} as ApiClientOptions,
    startOption: {
      drop_pending_updates: true,
      allowed_updates: ['message'],
    } as PollingOptions,
  } as const,
} as const;

__dev_mode__: logger.logProperty?.('config', config);
