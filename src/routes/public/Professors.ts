import Router from 'koa-router';
import { ProfessorsController } from '../../controllers/Professors';

const routes: Router = new Router({
  prefix: '/professors',
});

routes.get('/:id', ProfessorsController.get);
routes.get('/', ProfessorsController.getAll);

export default routes;
