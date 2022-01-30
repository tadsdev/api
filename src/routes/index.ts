import fs from 'fs';
import path from 'path';

import Router from 'koa-router';
import { MODE } from '../configs/Environment';
import { AuthMiddleware } from '../middlewares/auth';

const router: Router = new Router();
const extension = MODE === 'production' ? 'js' : 'ts';
try {
  const modules: string[] = fs.readdirSync(__dirname);

  modules.forEach((module) => {
    if (!module.includes('index') && module !== 'validators') {
      const modulePath = path.join(__dirname, module, `index.${extension}`);

      router.use(AuthMiddleware);

      const moduleRouter: Router = require(modulePath).default;

      router.use(moduleRouter.routes());
    }
  });
} catch (err) {
  console.error('routes error');
  console.error(err);
}

export default router;
