import { PrismaClient } from '@prisma/client';

export type ClassType = {
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

  public async create(body: ClassType) {
    const createdClass = await this.prisma.classes.create({
      data: { ...body },
    });

    return createdClass;
  }

  public async update(id: string, body: ClassType) {
    const classes = await this.prisma.classes.update({
      where: { id },
      data: { ...body },
    });

    return classes.id;
  }

  public async remove(id: string) {
    const classes = await this.prisma.classes.delete({
      where: { id },
    });

    return classes.id;
  }

  public async get(id: string) {
    const classes: ClassType = await this.prisma.classes.findUnique({
      where: { id },
    });

    return classes;
  }

  public async getAll() {
    const classes: ClassType[] = await this.prisma.classes.findMany();

    return classes;
  }
}

export default Class;
