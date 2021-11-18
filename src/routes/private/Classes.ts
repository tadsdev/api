import { Context } from 'koa';
import Router from 'koa-router';

const routes: Router = new Router({
  prefix: '/classes',
});

routes.post('/', (ctx: Context) => {
  console.log('classes');
});

export default routes;
