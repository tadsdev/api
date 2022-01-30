import Router from 'koa-router';
import { SubjectsController } from '../../controllers/Subjects';

const routes: Router = new Router({
  prefix: '/subjects',
});

routes.get('/:id', SubjectsController.get);
routes.get('/', SubjectsController.getAll);

export default routes;
