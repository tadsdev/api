import { lstatSync, readdirSync } from 'fs';
import Router from 'koa-router';
import path from 'path';

export function setupFileRoutesByFolder(router: Router, root: string) {
  const modules = readdirSync(root);

  modules.forEach((file: string) => {
    const filename = file.substr(0, file.lastIndexOf('.'));
    const folderPath = path.join(root, file);

    if (filename === 'index' || folderPath.includes('validators')) return;

    if (lstatSync(folderPath).isDirectory()) {
      setupFileRoutesByFolder(router, folderPath);
    } else {
      console.log(path.join(root, file));
      const module: Router = require(path.join(root, file)).default;

      router.use(module.routes());
    }
  });
}
