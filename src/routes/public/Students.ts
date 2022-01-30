import Router from 'koa-router';
import { StudentsController } from '../../controllers/Students';

const routes: Router = new Router({
  prefix: '/students',
});

routes.get('/:id', StudentsController.get);
routes.get('/', StudentsController.getAll);

export default routes;
