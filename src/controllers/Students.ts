import { Context } from 'koa';
import Students, { StudentRawType } from '../models/Student';

const model = new Students();

class StudentsController {
  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as StudentRawType;

    if (body.id) { delete body.id; }

    const updatedStudents = await model.update(id, body);

    if (!updatedStudents) {
      ctx.body = {
        errors: 'Error updating student',
      };
    }

    ctx.body = {
      message: 'Student updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedStudents = await model.remove(id);

    if (!removedStudents) {
      ctx.body = {
        errors: 'Error removing student',
      };
    }

    ctx.body = {
      message: 'Student removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const getStudents = await model.get(id);

    ctx.body = { Students: getStudents };
    ctx.status = getStudents ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const students = await model.getAll();

    ctx.body = { students };
    ctx.status = students.length > 0 ? 200 : 204;
  }
}

export { StudentsController };
