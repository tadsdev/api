import { Context } from 'koa';

export async function AuthMiddleware(ctx: Context, next: Function) {
  const msg = `${ctx.method} ${ctx.originalUrl}`;

  console.log('route', msg);

  if (msg.includes('admin')) {
    ctx.body = {
      message: 'Unauthorized user',
    };
    return;
  }

  await next();
}
