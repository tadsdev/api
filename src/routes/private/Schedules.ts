import Router from 'koa-router';
import { SchedulesController } from '../../controllers/Schedules';

const routes: Router = new Router({
  prefix: '/schedules',
});

routes.post('/', SchedulesController.create);
routes.put('/:id', SchedulesController.update);
routes.delete('/:id', SchedulesController.remove);

export default routes;
