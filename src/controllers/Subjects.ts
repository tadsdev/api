import { Context } from 'koa';
import Subjects, { SubjectRawType } from '@/models/Subject';

const model = new Subjects();

class SubjectsController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as SubjectRawType;

    const createdSubject = await model.create(body);

    if (!createdSubject.id) {
      ctx.body = {
        error: 'Error creating subject',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'Subject created successfully',
      data: {
        id: createdSubject.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as SubjectRawType;

    if (body.id) { delete body.id; }

    const updatedSubject = await model.update(id, body);

    if (!updatedSubject) {
      ctx.body = {
        errors: 'Error updating subject',
      };
    }

    ctx.body = {
      message: 'Subject updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedSubject = await model.remove(id);

    if (!removedSubject) {
      ctx.body = {
        errors: 'Error removing subject',
      };
    }

    ctx.body = {
      message: 'Subject removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const subject = await model.get(id);

    ctx.body = { subject };
    ctx.status = subject ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const subjects = await model.getAll();

    ctx.body = { subjects };
    ctx.status = subjects.length > 0 ? 200 : 204;
  }
}

export default SubjectsController;
