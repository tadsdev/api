import Router from 'koa-router';
import { ClassesController } from '@/controllers/Classes';

const routes: Router = new Router({
  prefix: '/classes',
});

routes.post('/', ClassesController.create);
routes.put('/:id', ClassesController.update);
routes.delete('/:id', ClassesController.remove);
routes.get('/:id', ClassesController.get);
routes.get('/', ClassesController.getAll);

export default routes;
