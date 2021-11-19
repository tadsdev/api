import { Context } from 'koa';
import Class, { ClassType } from '@/models/Class';

const model = new Class();

class ClassesController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as ClassType;

    const createdClass = await model.create(body);

    if (!createdClass.id) {
      ctx.body = {
        error: 'Error creating class',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'Class created successfully',
      data: {
        id: createdClass.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as ClassType;

    if (body.id) { delete body.id; }

    const updated = await model.update(id, body);

    if (!updated) {
      ctx.body = {
        errors: 'Error updating class',
      };
    }

    ctx.body = {
      message: 'Class updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removed = await model.remove(id);

    if (!removed) {
      ctx.body = {
        errors: 'Error removing class',
      };
    }

    ctx.body = {
      message: 'Class removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const getClass = await model.get(id);

    ctx.body = { class: getClass };
    ctx.status = getClass ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const classes = await model.getAll();

    ctx.body = { classes };
    ctx.status = classes.length > 0 ? 200 : 204;
  }
}

export default ClassesController;
