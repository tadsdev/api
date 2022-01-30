import { PrismaClient } from '@prisma/client';
import { ClassRawType } from './Class';
import { SubjectRawType } from './Subject';

export type ScheduleRawType = {
  id?: string
  weekday: string
  startTime: string
  endTime: string
  type: 'ASYNCHRONOUS' | 'SYNCHRONOUS'
  subjectId: string
  createdAt?: Date
  updatedAt?: Date
}

export type ScheduleType = ScheduleRawType & {
  class?: ClassRawType
  subject?: SubjectRawType
}

export type SchedulesByWeekday = {
  Monday?: ScheduleType
  Tuesday?: ScheduleType
  Wednesday?: ScheduleType
  Thursday?: ScheduleType
  Friday?: ScheduleType
}

class Schedule {
  private prisma = new PrismaClient();

  public async create(body: ScheduleRawType) {
    const createdSchedule = await this.prisma.schedules.create({
      data: { ...body },
    });

    return createdSchedule;
  }

  public async update(id: string, body: ScheduleRawType) {
    const updatedSchedule = await this.prisma.schedules.update({
      where: { id },
      data: { ...body },
    });

    return updatedSchedule.id;
  }

  public async remove(id: string) {
    const removedSchedule = await this.prisma.schedules.delete({
      where: { id },
    });

    return removedSchedule.id;
  }

  public async get(id: string) {
    const schedule: ScheduleType = await this.prisma.schedules.findUnique({
      where: { id },
      include: {
        subject: {
          include: {
            class: true,
            data: true,
            professor: {
              include: {
                user: true,
              },
            },
            semester: true,
          },
        },
      },
    });

    return schedule;
  }

  public async getAll(params) {
    const schedules: ScheduleRawType[] = await this.prisma.schedules.findMany({
      where: {
        OR: {
          type: params.type,
          subject: {
            class: {
              slug: params.slug,
              id: params.classId,
            },
            semesterId: params.semesterId,
            professorId: params.professorId,
          },
        },
      },
      include: {
        subject: {
          include: {
            class: true,
            data: true,
            professor: {
              include: {
                user: true,
              },
            },
            semester: true,
          },
        },
      },
    });

    const schedulesByWeekday: SchedulesByWeekday = {};

    schedules.forEach((schedule) => {
      if (schedule.weekday in schedulesByWeekday) {
        schedulesByWeekday[schedule.weekday].push(schedule);
      } else {
        schedulesByWeekday[schedule.weekday] = [];
        schedulesByWeekday[schedule.weekday].push(schedule);
      }
    });

    return schedulesByWeekday;
  }
}

export default Schedule;
