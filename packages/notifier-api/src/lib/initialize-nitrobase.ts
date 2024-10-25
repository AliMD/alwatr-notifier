import {config} from '../config.js';
import {nitrobase} from './nitrobase.js';

export function initializeNitrobase() {
  if (nitrobase.hasStore(config.nitrobase.categoriesCollection) === false) {
    nitrobase.newCollection(config.nitrobase.categoriesCollection);
  }
}
