import { PrismaClient } from '@prisma/client';
import { ClassRawType } from './Class';
import { UserType } from './Users';

export type StudentRawType = {
  id?: string
  registration: string
  institutionalEmail?: string
  isActive: boolean
  isRepresentative: boolean
  classId: string
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

export type StudentType = StudentRawType & {
  class?: ClassRawType
  user?: UserType
}

class Student {
  private prisma = new PrismaClient();

  public async create(body: StudentRawType) {
    const createdStudent = await this.prisma.students.create({
      data: { ...body },
    });

    return createdStudent;
  }

  public async update(id: string, body: StudentRawType) {
    const updatedStudent = await this.prisma.students.update({
      where: { id },
      data: { ...body },
    });

    return updatedStudent.id;
  }

  public async remove(id: string) {
    const removedStudent = await this.prisma.students.delete({
      where: { id },
    });

    return removedStudent.id;
  }

  public async get(id: string) {
    const Student: StudentType = await this.prisma.students.findUnique({
      where: { id },
      include: {
        user: true,
        class: true,
      },
    });

    return Student;
  }

  public async getAll() {
    const students: StudentRawType[] = await this.prisma.students.findMany({
      include: {
        user: true,
        class: true,
      },
    });

    return students;
  }
}

export default Student;
