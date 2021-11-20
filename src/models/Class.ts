import { PrismaClient } from '@prisma/client';

export type ClassRawType = {
  id?: string
  slug: string
  name: string
  description: string
  startDate: Date
  createdAt?: Date
  updatedAt?: Date
}

class Class {
  private prisma = new PrismaClient();

  public async create(body: ClassRawType) {
    const createdClass = await this.prisma.classes.create({
      data: { ...body },
    });

    return createdClass;
  }

  public async update(id: string, body: ClassRawType) {
    const updatedClass = await this.prisma.classes.update({
      where: { id },
      data: { ...body },
    });

    return updatedClass.id;
  }

  public async remove(id: string) {
    const removedClass = await this.prisma.classes.delete({
      where: { id },
    });

    return removedClass.id;
  }

  public async get(id: string) {
    const currentClass: ClassRawType = await this.prisma.classes.findUnique({
      where: { id },
    });

    return currentClass;
  }

  public async getAll() {
    const classes: ClassRawType[] = await this.prisma.classes.findMany();

    return classes;
  }
}

export default Class;
