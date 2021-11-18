import Router from 'koa-router';
import { setupFileRoutesByFolder } from '../../utils/routes';

const routes: Router = new Router();

try {
  setupFileRoutesByFolder(routes, __dirname);
} catch (err) {
  console.error('routes error');
  console.error(err);
}

export default routes;
