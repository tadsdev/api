import Router from 'koa-router';
import { SubjectDataController } from '../../controllers/SubjectData';

const routes: Router = new Router({
  prefix: '/subject-data',
});

routes.get('/:id', SubjectDataController.get);
routes.get('/', SubjectDataController.getAll);

export default routes;
