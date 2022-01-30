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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const User_1 = __importDefault(require("../models/User"));
const Professor_1 = __importDefault(require("../models/Professor"));
const Student_1 = __importDefault(require("../models/Student"));
const User = new User_1.default();
const Professor = new Professor_1.default();
const Student = new Student_1.default();
class UsersController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = ctx.request.body, { professor, student } = _a, body = __rest(_a, ["professor", "student"]);
            const createdUser = yield User.create(body);
            if (!createdUser.id) {
                ctx.body = {
                    error: 'Error creating user',
                };
                return;
            }
            let createdProfessor;
            let createdStudent;
            const data = {
                id: createdUser.id,
            };
            let message;
            if (createdUser.type === 'PROFESSOR') {
                const bodyProfessor = Object.assign(Object.assign({}, professor), { userId: createdUser.id });
                createdProfessor = yield Professor.create(bodyProfessor);
                data.professorId = createdProfessor.id;
                message = 'Professor user created successfully';
            }
            else if (createdUser.type === 'STUDENT') {
                const bodyStudent = Object.assign(Object.assign({}, student), { userId: createdUser.id });
                createdStudent = yield Student.create(bodyStudent);
                data.studentId = createdStudent.id;
                message = 'Student user created successfully';
            }
            ctx.status = 201;
            ctx.body = {
                message,
                data,
            };
        });
    }
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const body = ctx.request.body;
            if (body.id) {
                delete body.id;
            }
            const updatedUser = yield User.update(id, body);
            if (!updatedUser) {
                ctx.body = {
                    errors: 'Error updating user',
                };
            }
            ctx.body = {
                message: 'User updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedUser = yield User.remove(id);
            if (!removedUser) {
                ctx.body = {
                    errors: 'Error removing user',
                };
            }
            ctx.body = {
                message: 'User removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const user = yield User.get(id);
            ctx.body = { user };
            ctx.status = user ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.getAll();
            ctx.body = { users };
            ctx.status = users.length > 0 ? 200 : 204;
        });
    }
}
exports.UsersController = UsersController;
