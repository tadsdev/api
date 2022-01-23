import Router from 'koa-router';
import { SchedulesController } from '@/controllers/Schedules';

const routes: Router = new Router({
  prefix: '/schedules',
});

routes.post('/', SchedulesController.create);
routes.put('/:id', SchedulesController.update);
routes.delete('/:id', SchedulesController.remove);
routes.get('/:id', SchedulesController.get);
routes.get('/', SchedulesController.getAll);

export default routes;
