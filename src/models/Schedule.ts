import { PrismaClient } from '@prisma/client';
import { ClassRawType } from './Class';
import { ProfessorType } from './Professor';
import { SemesterRawType } from './Semester';
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
        subject: true,
      },
    });

    return schedule;
  }

  public async getAll() {
    const schedules: ScheduleRawType[] = await this.prisma.schedules.findMany({
      include: {
        subject: {
          include: {
            class: true,
            data: true,
            professor: true,
            semester: true,
          },
        },
      },
    });

    return schedules;
  }
}

export default Schedule;
