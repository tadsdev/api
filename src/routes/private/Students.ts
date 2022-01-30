import Router from 'koa-router';
import { StudentsController } from '../../controllers/Students';

const routes: Router = new Router({
  prefix: '/students',
});

routes.put('/:id', StudentsController.update);
routes.delete('/:id', StudentsController.remove);

export default routes;
