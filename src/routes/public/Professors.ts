import Router from 'koa-router';
import ProfessorsController from '@/controllers/Professors';

const routes: Router = new Router({
  prefix: '/professors',
});

routes.put('/:id', ProfessorsController.update);
routes.delete('/:id', ProfessorsController.remove);
routes.get('/:id', ProfessorsController.get);
routes.get('/', ProfessorsController.getAll);

export default routes;
