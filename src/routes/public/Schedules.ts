import Router from 'koa-router';
import { SchedulesController } from '../../controllers/Schedules';

const routes: Router = new Router({
  prefix: '/schedules',
});

routes.get('/:id', SchedulesController.get);
routes.get('/', SchedulesController.getAll);

export default routes;
