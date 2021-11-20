import { Context } from 'koa';
import Users, { UserRawType } from '@/models/User';

const model = new Users();

class UsersController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as UserRawType;

    const createdUser = await model.create(body);

    if (!createdUser.id) {
      ctx.body = {
        error: 'Error creating user',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'User created successfully',
      data: {
        id: createdUser.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as UserRawType;

    if (body.id) { delete body.id; }

    const updatedUser = await model.update(id, body);

    if (!updatedUser) {
      ctx.body = {
        errors: 'Error updating user',
      };
    }

    ctx.body = {
      message: 'User updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedUser = await model.remove(id);

    if (!removedUser) {
      ctx.body = {
        errors: 'Error removing user',
      };
    }

    ctx.body = {
      message: 'User removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const User = await model.get(id);

    ctx.body = { User };
    ctx.status = User ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const users = await model.getAll();

    ctx.body = { users };
    ctx.status = users.length > 0 ? 200 : 204;
  }
}

export default UsersController;
