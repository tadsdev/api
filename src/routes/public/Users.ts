import Router from 'koa-router';
import { UsersController } from '@/controllers/Users';

const routes: Router = new Router({
  prefix: '/users',
});

routes.post('/', UsersController.create);
routes.put('/:id', UsersController.update);
routes.delete('/:id', UsersController.remove);
routes.get('/:id', UsersController.get);
routes.get('/', UsersController.getAll);

export default routes;
