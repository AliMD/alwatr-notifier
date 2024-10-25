import './command/start-command.js';
import {logger} from './config.js';
import {startBot} from './lib/bot.js';
import {initializeNitrobase} from './lib/initialize-nitrobase.js';
import './route/addNewCategoryRoute.js';
import './route/home.js';
import './route/notifyRoute.js';

logger.banner(__package_name__);

initializeNitrobase();

startBot();
