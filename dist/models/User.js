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
class User {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = yield this.prisma.users.create({
                data: Object.assign({}, body),
            });
            return createdUser;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.prisma.users.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedUser.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedUser = yield this.prisma.users.delete({
                where: { id },
            });
            return removedUser.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield this.prisma.users.findUnique({
                where: { id },
            });
            return User;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.prisma.users.findMany({
                include: {
                    professor: true,
                    student: true,
                },
            });
            return users;
        });
    }
}
exports.default = User;
