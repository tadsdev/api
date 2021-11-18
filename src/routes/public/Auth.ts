import { Context } from 'koa';
import Router from 'koa-router';

const routes: Router = new Router({
  prefix: '/auth',
});

routes.post('/', (ctx: Context) => {
  console.log('auth');
});

export default routes;
