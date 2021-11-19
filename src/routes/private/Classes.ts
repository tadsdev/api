import { Context } from 'koa';
import Router from 'koa-router';

const routes: Router = new Router({
  prefix: '/classes',
});

routes.get('/a', (ctx: Context) => {
  console.log('classes');
});

export default routes;
