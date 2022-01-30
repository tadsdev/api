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
class Class {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdClass = yield this.prisma.classes.create({
                data: Object.assign({}, body),
            });
            return createdClass;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedClass = yield this.prisma.classes.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedClass.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedClass = yield this.prisma.classes.delete({
                where: { id },
            });
            return removedClass.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentClass = yield this.prisma.classes.findUnique({
                where: { id },
            });
            return currentClass;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const classes = yield this.prisma.classes.findMany();
            return classes;
        });
    }
}
exports.default = Class;
