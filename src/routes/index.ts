import fs from 'fs';
import path from 'path';

import Router from 'koa-router';
import { AuthMiddleware } from '../middlewares/auth';

const router: Router = new Router();

try {
  const modules: string[] = fs.readdirSync(__dirname);

  modules.forEach((module) => {
    if (module !== 'index.ts' && module !== 'validators') {
      const modulePath = path.join(__dirname, module, 'index.ts');

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
