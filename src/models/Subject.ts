import { PrismaClient } from '@prisma/client';
import { ClassRawType } from './Class';
import { ProfessorType } from './Professor';
import { SemesterRawType } from './Semester';
import { SubjectDataRawType } from './SubjectData';

export type SubjectRawType = {
  id?: string
  classroomCode?: string
  meetingLink?: string
  classId: string
  professorId: string
  semesterId: string
  subjectDataId: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubjectType = SubjectRawType & {
  class?: ClassRawType
  professor?: ProfessorType
  semester?: SemesterRawType
  data?: SubjectDataRawType
}

class Subject {
  private prisma = new PrismaClient();

  public async create(body: SubjectRawType) {
    const createdSubject = await this.prisma.subjects.create({
      data: { ...body },
    });

    return createdSubject;
  }

  public async update(id: string, body: SubjectRawType) {
    const updatedSubject = await this.prisma.subjects.update({
      where: { id },
      data: { ...body },
    });

    return updatedSubject.id;
  }

  public async remove(id: string) {
    const removedSubject = await this.prisma.subjects.delete({
      where: { id },
    });

    return removedSubject.id;
  }

  public async get(id: string) {
    const Schedule: SubjectType = await this.prisma.subjects.findUnique({
      where: { id },
      include: {
        class: true,
        professor: {
          include: {
            user: true,
          },
        },
        semester: true,
        data: true,
      },
    });

    return Schedule;
  }

  public async getAll() {
    const subjects: SubjectType[] = await this.prisma.subjects.findMany({
      include: {
        class: true,
        professor: {
          include: {
            user: true,
          },
        },
        semester: true,
        data: true,
      },
    });

    return subjects;
  }
}

export default Subject;
