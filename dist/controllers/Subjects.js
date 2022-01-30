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
exports.SubjectsController = void 0;
const Subject_1 = __importDefault(require("../models/Subject"));
const model = new Subject_1.default();
class SubjectsController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = ctx.request.body;
            const createdSubject = yield model.create(body);
            if (!createdSubject.id) {
                ctx.body = {
                    error: 'Error creating subject',
                };
                return;
            }
            ctx.status = 201;
            ctx.body = {
                message: 'Subject created successfully',
                data: {
                    id: createdSubject.id,
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
            const updatedSubject = yield model.update(id, body);
            if (!updatedSubject) {
                ctx.body = {
                    errors: 'Error updating subject',
                };
            }
            ctx.body = {
                message: 'Subject updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedSubject = yield model.remove(id);
            if (!removedSubject) {
                ctx.body = {
                    errors: 'Error removing subject',
                };
            }
            ctx.body = {
                message: 'Subject removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const subject = yield model.get(id);
            ctx.body = { subject };
            ctx.status = subject ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const subjects = yield model.getAll();
            ctx.body = { subjects };
            ctx.status = subjects.length > 0 ? 200 : 204;
        });
    }
}
exports.SubjectsController = SubjectsController;
