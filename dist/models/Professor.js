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
class Professor {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdProfessor = yield this.prisma.professors.create({
                data: Object.assign({}, body),
            });
            return createdProfessor;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProfessor = yield this.prisma.professors.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedProfessor.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedProfessor = yield this.prisma.professors.delete({
                where: { id },
            });
            return removedProfessor.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Professor = yield this.prisma.professors.findUnique({
                where: { id },
                include: {
                    user: true,
                },
            });
            return Professor;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const professors = yield this.prisma.professors.findMany({
                include: {
                    user: true,
                },
            });
            return professors;
        });
    }
}
exports.default = Professor;
