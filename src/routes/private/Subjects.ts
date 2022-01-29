import Router from 'koa-router';
import { SubjectsController } from '@/controllers/Subjects';

const routes: Router = new Router({
  prefix: '/subjects',
});

routes.post('/', SubjectsController.create);
routes.put('/:id', SubjectsController.update);
routes.delete('/:id', SubjectsController.remove);

export default routes;
