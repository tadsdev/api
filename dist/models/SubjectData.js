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
class Subject {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdSubject = yield this.prisma.subjectData.create({
                data: Object.assign({}, body),
            });
            return createdSubject;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSubject = yield this.prisma.subjectData.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedSubject.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedSubject = yield this.prisma.subjectData.delete({
                where: { id },
            });
            return removedSubject.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const subject = yield this.prisma.subjectData.findUnique({
                where: { id },
            });
            return subject;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const subjects = yield this.prisma.subjectData.findMany();
            return subjects;
        });
    }
}
exports.default = Subject;
