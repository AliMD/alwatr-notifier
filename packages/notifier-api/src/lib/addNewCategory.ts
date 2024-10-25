import {config, logger} from '../config.js';
import {hashGenerator} from './hash.js';
import {nitrobase} from './nitrobase.js';

import type {Category} from '../type.js';

export async function addNewCategory(title: string): Promise<void> {
  logger.logMethodArgs?.('addNewCategory', title);

  const categoriesCollection = await nitrobase.openCollection<Category>(config.nitrobase.categoriesCollection);

  const categoryId = hashGenerator.generateSelfValidate(title);
  categoriesCollection.addItem(categoryId, {
    title,
    members: []
  });

  categoriesCollection.save();
}
