import { PrismaClient } from '@prisma/client';

export type SubjectDataRawType = {
  id?: string
  name: string
  initials: string
  workload: number
  timeCourse: number
  description?: string
  createdAt?: Date
  updatedAt?: Date
}

class Subject {
  private prisma = new PrismaClient();

  public async create(body: SubjectDataRawType) {
    const createdSubject = await this.prisma.subjectData.create({
      data: { ...body },
    });

    return createdSubject;
  }

  public async update(id: string, body: SubjectDataRawType) {
    const updatedSubject = await this.prisma.subjectData.update({
      where: { id },
      data: { ...body },
    });

    return updatedSubject.id;
  }

  public async remove(id: string) {
    const removedSubject = await this.prisma.subjectData.delete({
      where: { id },
    });

    return removedSubject.id;
  }

  public async get(id: string) {
    const subject: SubjectDataRawType = await this.prisma.subjectData.findUnique({
      where: { id },
    });

    return subject;
  }

  public async getAll() {
    const subjects: SubjectDataRawType[] = await this.prisma.subjectData.findMany();

    return subjects;
  }
}

export default Subject;
