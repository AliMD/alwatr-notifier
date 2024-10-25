import {AlwatrNitrobase} from 'alwatr/nitrobase';

import {config} from '../config.js';

export const nitrobase = new AlwatrNitrobase(config.nitrobase.config);
