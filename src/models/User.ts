import { PrismaClient } from '@prisma/client';

export type UserRawType = {
  id?: string
  firstName: string
  lastName: string
  email?: string
  phone?: string
  type: 'ADMIN' | 'PROFESSOR' | 'STUDENT'
  createdAt?: Date
  updatedAt?: Date
}

class User {
  private prisma = new PrismaClient();

  public async create(body: UserRawType) {
    const createdUser = await this.prisma.users.create({
      data: { ...body },
    });

    return createdUser;
  }

  public async update(id: string, body: UserRawType) {
    const updatedUser = await this.prisma.users.update({
      where: { id },
      data: { ...body },
    });

    return updatedUser.id;
  }

  public async remove(id: string) {
    const removedUser = await this.prisma.users.delete({
      where: { id },
    });

    return removedUser.id;
  }

  public async get(id: string) {
    const User: UserRawType = await this.prisma.users.findUnique({
      where: { id },
    });

    return User;
  }

  public async getAll() {
    const users: UserRawType[] = await this.prisma.users.findMany(
      {
        include: {
          professor: true,
          student: true,
        },
      },
    );

    return users;
  }
}

export default User;
