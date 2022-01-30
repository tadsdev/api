import Router from 'koa-router';
import { SubjectDataController } from '../../controllers/SubjectData';

const routes: Router = new Router({
  prefix: '/subject-data',
});

routes.post('/', SubjectDataController.create);
routes.put('/:id', SubjectDataController.update);
routes.delete('/:id', SubjectDataController.remove);

export default routes;
