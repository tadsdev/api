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
exports.ProfessorsController = void 0;
const Professor_1 = __importDefault(require("../models/Professor"));
const model = new Professor_1.default();
class ProfessorsController {
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const body = ctx.request.body;
            if (body.id) {
                delete body.id;
            }
            const updatedProfessor = yield model.update(id, body);
            if (!updatedProfessor) {
                ctx.body = {
                    errors: 'Error updating professor',
                };
            }
            ctx.body = {
                message: 'Professor updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedProfessor = yield model.remove(id);
            if (!removedProfessor) {
                ctx.body = {
                    errors: 'Error removing professor',
                };
            }
            ctx.body = {
                message: 'Professor removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const professor = yield model.get(id);
            ctx.body = { professor };
            ctx.status = professor ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const professors = yield model.getAll();
            ctx.body = { professors };
            ctx.status = professors.length > 0 ? 200 : 204;
        });
    }
}
exports.ProfessorsController = ProfessorsController;
