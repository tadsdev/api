import { Context } from 'koa';
import Semester, { SemesterRawType } from '@/models/Semester';

const model = new Semester();

class SemestersController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as SemesterRawType;

    const createdSemester = await model.create(body);

    if (!createdSemester.id) {
      ctx.body = {
        error: 'Error creating semester',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'Semester created successfully',
      data: {
        id: createdSemester.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as SemesterRawType;

    if (body.id) { delete body.id; }

    const updatedSemester = await model.update(id, body);

    if (!updatedSemester) {
      ctx.body = {
        errors: 'Error updating semester',
      };
    }

    ctx.body = {
      message: 'Semester updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedSemester = await model.remove(id);

    if (!removedSemester) {
      ctx.body = {
        errors: 'Error removing semester',
      };
    }

    ctx.body = {
      message: 'Semester removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const semester = await model.get(id);

    ctx.body = { semester };
    ctx.status = semester ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const semesters = await model.getAll();

    ctx.body = { semesters };
    ctx.status = semesters.length > 0 ? 200 : 204;
  }
}

export { SemestersController };
