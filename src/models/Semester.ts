import { PrismaClient } from '@prisma/client';

export type SemesterRawType = {
  id?: string
  name: string
  startDate: Date
  conceptDate: Date
  endDate: Date
  createdAt?: Date
  updatedAt?: Date
}

class Semester {
  private prisma = new PrismaClient();

  public async create(body: SemesterRawType) {
    const createdSemester = await this.prisma.semesters.create({
      data: { ...body },
    });

    return createdSemester;
  }

  public async update(id: string, body: SemesterRawType) {
    const updatedSemester = await this.prisma.semesters.update({
      where: { id },
      data: { ...body },
    });

    return updatedSemester.id;
  }

  public async remove(id: string) {
    const removedSemester = await this.prisma.semesters.delete({
      where: { id },
    });

    return removedSemester.id;
  }

  public async get(id: string) {
    const semester: SemesterRawType = await this.prisma.semesters.findUnique({
      where: { id },
    });

    return semester;
  }

  public async getAll() {
    const semesters: SemesterRawType[] = await this.prisma.semesters.findMany();

    return semesters;
  }
}

export default Semester;
