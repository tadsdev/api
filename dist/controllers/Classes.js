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
exports.ClassesController = void 0;
const Class_1 = __importDefault(require("../models/Class"));
const model = new Class_1.default();
class ClassesController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = ctx.request.body;
            const createdClass = yield model.create(body);
            if (!createdClass.id) {
                ctx.body = {
                    error: 'Error creating class',
                };
                return;
            }
            ctx.status = 201;
            ctx.body = {
                message: 'Class created successfully',
                data: {
                    id: createdClass.id,
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
            const updated = yield model.update(id, body);
            if (!updated) {
                ctx.body = {
                    errors: 'Error updating class',
                };
            }
            ctx.body = {
                message: 'Class updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removed = yield model.remove(id);
            if (!removed) {
                ctx.body = {
                    errors: 'Error removing class',
                };
            }
            ctx.body = {
                message: 'Class removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const getClass = yield model.get(id);
            ctx.body = { class: getClass };
            ctx.status = getClass ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const classes = yield model.getAll();
            ctx.body = { classes };
            ctx.status = classes.length > 0 ? 200 : 204;
        });
    }
}
exports.ClassesController = ClassesController;
