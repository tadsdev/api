"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class Student {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdStudent = yield this.prisma.students.create({
                data: Object.assign({}, body),
            });
            return createdStudent;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedStudent = yield this.prisma.students.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedStudent.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedStudent = yield this.prisma.students.delete({
                where: { id },
            });
            return removedStudent.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Student = yield this.prisma.students.findUnique({
                where: { id },
                include: {
                    user: true,
                    class: true,
                },
            });
            return Student;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield this.prisma.students.findMany({
                include: {
                    user: true,
                    class: true,
                },
            });
            return students;
        });
    }
}
exports.default = Student;
