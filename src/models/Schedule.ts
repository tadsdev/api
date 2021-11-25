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
  classId: string
  subjectId: string
  professorId: string
  semesterId: string
  createdAt?: Date
  updatedAt?: Date
}

export type ScheduleType = ScheduleRawType & {
  class?: ClassRawType
  professor?: ProfessorType
  subject?: SubjectRawType
  semester?: SemesterRawType
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
    const Schedule: ScheduleType = await this.prisma.schedules.findUnique({
      where: { id },
      include: {
        class: true,
        professor: {
          include: {
            user: true,
          },
        },
        semester: true,
        subject: true,
      },
    });

    return Schedule;
  }

  public async getAll() {
    const schedules: ScheduleRawType[] = await this.prisma.schedules.findMany({
      include: {
        class: true,
        professor: {
          include: {
            user: true,
          },
        },
        semester: true,
        subject: true,
      },
    });

    return schedules;
  }
}

export default Schedule;
