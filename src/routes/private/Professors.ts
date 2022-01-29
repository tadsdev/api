import Router from 'koa-router';
import { ProfessorsController } from '@/controllers/Professors';

const routes: Router = new Router({
  prefix: '/professors',
});

routes.put('/:id', ProfessorsController.update);
routes.delete('/:id', ProfessorsController.remove);

export default routes;
