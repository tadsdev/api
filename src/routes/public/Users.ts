import Router from 'koa-router';
import { UsersController } from '../../controllers/Users';

const routes: Router = new Router({
  prefix: '/users',
});

routes.get('/:id', UsersController.get);
routes.get('/', UsersController.getAll);

export default routes;
