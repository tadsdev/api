import Router from 'koa-router';
import { SemestersController } from '../../controllers/Semesters';

const routes: Router = new Router({
  prefix: '/semesters',
});

routes.get('/:id', SemestersController.get);
routes.get('/', SemestersController.getAll);

export default routes;
