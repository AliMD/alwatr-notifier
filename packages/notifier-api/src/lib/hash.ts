import {AlwatrHashGenerator} from 'alwatr/nanotron';

import {config} from '../config.js';

export const hashGenerator = new AlwatrHashGenerator(config.hashGenerator);
