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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
const Student_1 = __importDefault(require("../models/Student"));
const model = new Student_1.default();
class StudentsController {
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const body = ctx.request.body;
            if (body.id) {
                delete body.id;
            }
            const updatedStudents = yield model.update(id, body);
            if (!updatedStudents) {
                ctx.body = {
                    errors: 'Error updating student',
                };
            }
            ctx.body = {
                message: 'Student updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedStudents = yield model.remove(id);
            if (!removedStudents) {
                ctx.body = {
                    errors: 'Error removing student',
                };
            }
            ctx.body = {
                message: 'Student removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const getStudents = yield model.get(id);
            ctx.body = { Students: getStudents };
            ctx.status = getStudents ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield model.getAll();
            ctx.body = { students };
            ctx.status = students.length > 0 ? 200 : 204;
        });
    }
}
exports.StudentsController = StudentsController;
