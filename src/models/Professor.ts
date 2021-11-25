import { PrismaClient } from '@prisma/client';
import { UserRawType } from './User';

export type ProfessorRawType = {
  id?: string
  institutionalEmail?: string
  graduateArea?: string
  searchAreas?: string
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

export type ProfessorType = ProfessorRawType & {
  user?: UserRawType
}

class Professor {
  private prisma = new PrismaClient();

  public async create(body: ProfessorRawType) {
    const createdProfessor: ProfessorRawType = await this.prisma.professors.create({
      data: { ...body },
    });

    return createdProfessor;
  }

  public async update(id: string, body: ProfessorRawType) {
    const updatedProfessor = await this.prisma.professors.update({
      where: { id },
      data: { ...body },
    });

    return updatedProfessor.id;
  }

  public async remove(id: string) {
    const removedProfessor = await this.prisma.professors.delete({
      where: { id },
    });

    return removedProfessor.id;
  }

  public async get(id: string) {
    const Professor: ProfessorType = await this.prisma.professors.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    return Professor;
  }

  public async getAll() {
    const professors: ProfessorRawType[] = await this.prisma.professors.findMany({
      include: {
        user: true,
      },
    });

    return professors;
  }
}

export default Professor;
