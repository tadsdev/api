import fs from 'fs';
import path from 'path';

import Router from 'koa-router';
import { TestMiddleware } from '@/middlewares/test';

const router: Router = new Router();

try {
  const modules: string[] = fs.readdirSync(__dirname);

  modules.forEach((module) => {
    if (module !== 'index.ts' && module !== 'validators') {
      const modulePath = path.join(__dirname, module, 'index.ts');

      if (module === 'private') {
        router.use(TestMiddleware);
      }

      const moduleRouter: Router = require(modulePath).default;

      router.use(moduleRouter.routes());
    }
  });
} catch (err) {
  console.error('routes error');
  console.error(err);
}

export default router;
