import Router from 'koa-router';
import { ClassesController } from '../../controllers/Classes';

const routes: Router = new Router({
  prefix: '/classes',
});

routes.get('/:id', ClassesController.get);
routes.get('/', ClassesController.getAll);

export default routes;
