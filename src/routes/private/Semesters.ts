import Router from 'koa-router';
import { SemestersController } from '../../controllers/Semesters';

const routes: Router = new Router({
  prefix: '/semesters',
});

routes.post('/', SemestersController.create);
routes.put('/:id', SemestersController.update);
routes.delete('/:id', SemestersController.remove);

export default routes;
