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
exports.SubjectDataController = void 0;
const SubjectData_1 = __importDefault(require("../models/SubjectData"));
const model = new SubjectData_1.default();
class SubjectDataController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = ctx.request.body;
            const createdSubjectData = yield model.create(body);
            if (!createdSubjectData.id) {
                ctx.body = {
                    error: 'Error creating subject data',
                };
                return;
            }
            ctx.status = 201;
            ctx.body = {
                message: 'Subject data created successfully',
                data: {
                    id: createdSubjectData.id,
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
            const updatedSubjectData = yield model.update(id, body);
            if (!updatedSubjectData) {
                ctx.body = {
                    errors: 'Error updating subject data',
                };
            }
            ctx.body = {
                message: 'Subject data updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedSubjectData = yield model.remove(id);
            if (!removedSubjectData) {
                ctx.body = {
                    errors: 'Error removing subject data',
                };
            }
            ctx.body = {
                message: 'Subject data removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const subjectData = yield model.get(id);
            ctx.body = { subjectData };
            ctx.status = subjectData ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const subjectData = yield model.getAll();
            ctx.body = { subjectData };
            ctx.status = subjectData.length > 0 ? 200 : 204;
        });
    }
}
exports.SubjectDataController = SubjectDataController;
