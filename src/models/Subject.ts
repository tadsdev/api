import { PrismaClient } from '@prisma/client';

export type SubjectRawType = {
  id?: string
  name: string
  workload: number
  timeCourse: number
  description?: string
  createdAt?: Date
  updatedAt?: Date
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
    const subject: SubjectRawType = await this.prisma.subjects.findUnique({
      where: { id },
    });

    return subject;
  }

  public async getAll() {
    const subjects: SubjectRawType[] = await this.prisma.subjects.findMany();

    return subjects;
  }
}

export default Subject;
