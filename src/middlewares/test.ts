import { Context } from 'koa';

export async function TestMiddleware(ctx: Context, next: Function) {
  const msg = `${ctx.method} ${ctx.originalUrl}`;

  console.log('route', msg);

  await next();
}
