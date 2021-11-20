import { Context } from 'koa';
import path from 'path';

export async function ValidateMiddleware(ctx: Context, next: Function) {
  const fileName = `${ctx.originalUrl.replace('/', '')}.ts`;
  const method = ctx.method.toLowerCase();
  const currentPath = path.join('./src/utils/validators', fileName);

  const file = require(currentPath).default;
  const validator = file[method];

  if (validator && validator.params) {
    const { error } = validator.params.validate(ctx.params);
    if (error) {
      ctx.status = 400;
      ctx.body = {
        error: error.details,
      };
      return;
    }
  }

  if (validator && validator.query) {
    const { error } = validator.query.validate(ctx.query);
    if (error) {
      ctx.status = 400;
      ctx.body = {
        error: error.details,
      };
      return;
    }
  }

  if (validator && validator.body) {
    const { error } = validator.body.validate(
      ctx.request.body,
    );
    if (error) {
      ctx.status = 400;
      ctx.body = {
        error: error.details,
      };
    }
  }

  await next();
}
