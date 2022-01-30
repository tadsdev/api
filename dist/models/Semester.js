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
class Semester {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdSemester = yield this.prisma.semesters.create({
                data: Object.assign({}, body),
            });
            return createdSemester;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSemester = yield this.prisma.semesters.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedSemester.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedSemester = yield this.prisma.semesters.delete({
                where: { id },
            });
            return removedSemester.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const semester = yield this.prisma.semesters.findUnique({
                where: { id },
            });
            return semester;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const semesters = yield this.prisma.semesters.findMany();
            return semesters;
        });
    }
}
exports.default = Semester;
