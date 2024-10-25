import {logger} from '../config.js';
import {adminValidation} from '../handler/admin-validation.js';
import {categoryTitleValidation} from '../handler/category-title-validation.js';
import {parseBodyAsJson} from '../handler/parse-body-as-json.js';
import {addNewCategory} from '../lib/addNewCategory.js';
import {nanotronApiServer} from '../lib/server.js';

import type {AddNewCategoryOption} from '../type.js';

nanotronApiServer.defineRoute<{body: AddNewCategoryOption}>({
  method: 'PUT',
  url: 'add-new-category',
  preHandlers: [parseBodyAsJson, adminValidation, categoryTitleValidation],
  async handler() {
    logger.logMethod?.('addNewCategoryRoute');

    await addNewCategory(this.sharedMeta.body.title);

    this.serverResponse.replyJson({
      ok: true,
      data: {
        title: this.sharedMeta.body.title
      }
    });
  },
});
