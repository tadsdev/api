import { Context } from 'koa';
import Schedule, { ScheduleRawType } from '../models/Schedule';

const model = new Schedule();

class SchedulesController {
  public static async create(ctx: Context) {
    const body = ctx.request.body as ScheduleRawType;

    const createdSchedule = await model.create(body);

    if (!createdSchedule.id) {
      ctx.body = {
        error: 'Error creating schedule',
      };
      return;
    }

    ctx.status = 201;
    ctx.body = {
      message: 'Schedule created successfully',
      data: {
        id: createdSchedule.id,
      },
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as ScheduleRawType;

    if (body.id) { delete body.id; }

    const updatedSchedule = await model.update(id, body);

    if (!updatedSchedule) {
      ctx.body = {
        errors: 'Error updating schedule',
      };
    }

    ctx.body = {
      message: 'Schedule updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedSchedule = await model.remove(id);

    if (!removedSchedule) {
      ctx.body = {
        errors: 'Error removing schedule',
      };
    }

    ctx.body = {
      message: 'Schedule removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const schedule = await model.get(id);

    ctx.body = { schedule };
    ctx.status = schedule ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const params = ctx.request.query;

    const schedules = await model.getAll(params);

    ctx.body = { schedules };
    // ctx.status = schedules.length > 0 ? 200 : 204;
  }
}

export { SchedulesController };
