import { Context } from 'koa';
import UserModel, { UserRawType } from '@/models/User';
import ProfessorModel from '@/models/Professor';
import StudentModel from '@/models/Student';

const User = new UserModel();
const Professor = new ProfessorModel();
const Student = new StudentModel();

type BodyCreateType = UserRawType & {
  professor?: {
    institutionalEmail?: string
    graduateArea?: string
    searchAreas?: string
  }
  student?: {
    registration: string
    institutionalEmail?: string
    isActive: boolean
    isRepresentative: boolean
    classId: string
  }
}

type DataCreateType = {
  id?: string
  professorId?: string
  studentId?: string
}

class UsersController {
  public static async create(ctx: Context) {
    const { professor, student, ...body } = ctx.request.body as BodyCreateType;

    const createdUser = await User.create(body);

    if (!createdUser.id) {
      ctx.body = {
        error: 'Error creating user',
      };
      return;
    }

    let createdProfessor;
    let createdStudent;
    const data: DataCreateType = {
      id: createdUser.id,
    };
    let message;

    if (createdUser.type === 'PROFESSOR') {
      const bodyProfessor = { ...professor, userId: createdUser.id };
      createdProfessor = await Professor.create(bodyProfessor);
      data.professorId = createdProfessor.id;
      message = 'Professor user created successfully';
    } else if (createdUser.type === 'STUDENT') {
      const bodyStudent = { ...student, userId: createdUser.id };
      createdStudent = await Student.create(bodyStudent);
      data.studentId = createdStudent.id;
      message = 'Student user created successfully';
    }

    ctx.status = 201;
    ctx.body = {
      message,
      data,
    };
  }

  public static async update(ctx: Context) {
    const id = ctx.params.id as string;
    const body = ctx.request.body as UserRawType;

    if (body.id) { delete body.id; }

    const updatedUser = await User.update(id, body);

    if (!updatedUser) {
      ctx.body = {
        errors: 'Error updating user',
      };
    }

    ctx.body = {
      message: 'User updated successfully',
    };
  }

  public static async remove(ctx: Context) {
    const id = ctx.params.id as string;

    const removedUser = await User.remove(id);

    if (!removedUser) {
      ctx.body = {
        errors: 'Error removing user',
      };
    }

    ctx.body = {
      message: 'User removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const id = ctx.params.id as string;

    const user = await User.get(id);

    ctx.body = { user };
    ctx.status = user ? 200 : 204;
  }

  public static async getAll(ctx: Context) {
    const users = await User.getAll();

    ctx.body = { users };
    ctx.status = users.length > 0 ? 200 : 204;
  }
}

export default UsersController;
