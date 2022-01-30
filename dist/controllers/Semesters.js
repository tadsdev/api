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
exports.SemestersController = void 0;
const Semester_1 = __importDefault(require("../models/Semester"));
const model = new Semester_1.default();
class SemestersController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = ctx.request.body;
            const createdSemester = yield model.create(body);
            if (!createdSemester.id) {
                ctx.body = {
                    error: 'Error creating semester',
                };
                return;
            }
            ctx.status = 201;
            ctx.body = {
                message: 'Semester created successfully',
                data: {
                    id: createdSemester.id,
                },
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
            const updatedSemester = yield model.update(id, body);
            if (!updatedSemester) {
                ctx.body = {
                    errors: 'Error updating semester',
                };
            }
            ctx.body = {
                message: 'Semester updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedSemester = yield model.remove(id);
            if (!removedSemester) {
                ctx.body = {
                    errors: 'Error removing semester',
                };
            }
            ctx.body = {
                message: 'Semester removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const semester = yield model.get(id);
            ctx.body = { semester };
            ctx.status = semester ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const semesters = yield model.getAll();
            ctx.body = { semesters };
            ctx.status = semesters.length > 0 ? 200 : 204;
        });
    }
}
exports.SemestersController = SemestersController;
