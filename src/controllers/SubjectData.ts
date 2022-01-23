import { Context } from 'koa';
import SubjectData, { SubjectDataRawType } from '@/models/SubjectData';

const model = new SubjectData();

class SubjectDataController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as SubjectDataRawType;

    const createdSubjectData = await model.create(body);

    if (!createdSubjectData.id) {
      ctx.body = {
        error: 'Error creating subject data',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'Subject data created successfully',
      data: {
        id: createdSubjectData.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as SubjectDataRawType;

    if (body.id) { delete body.id; }

    const updatedSubjectData = await model.update(id, body);

    if (!updatedSubjectData) {
      ctx.body = {
        errors: 'Error updating subject data',
      };
    }

    ctx.body = {
      message: 'Subject data updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedSubjectData = await model.remove(id);

    if (!removedSubjectData) {
      ctx.body = {
        errors: 'Error removing subject data',
      };
    }

    ctx.body = {
      message: 'Subject data removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const subjectData = await model.get(id);

    ctx.body = { subjectData };
    ctx.status = subjectData ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const subjectData = await model.getAll();

    ctx.body = { subjectData };
    ctx.status = subjectData.length > 0 ? 200 : 204;
  }
}

export { SubjectDataController };
