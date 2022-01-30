import { Context } from 'koa';
import Professor, { ProfessorRawType } from '../models/Professor';

const model = new Professor();

class ProfessorsController {
  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as ProfessorRawType;

    if (body.id) { delete body.id; }

    const updatedProfessor = await model.update(id, body);

    if (!updatedProfessor) {
      ctx.body = {
        errors: 'Error updating professor',
      };
    }

    ctx.body = {
      message: 'Professor updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedProfessor = await model.remove(id);

    if (!removedProfessor) {
      ctx.body = {
        errors: 'Error removing professor',
      };
    }

    ctx.body = {
      message: 'Professor removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const professor = await model.get(id);

    ctx.body = { professor };
    ctx.status = professor ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const professors = await model.getAll();

    ctx.body = { professors };
    ctx.status = professors.length > 0 ? 200 : 204;
  }
}

export { ProfessorsController };
