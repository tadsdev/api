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
exports.SchedulesController = void 0;
const Schedule_1 = __importDefault(require("../models/Schedule"));
const model = new Schedule_1.default();
class SchedulesController {
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = ctx.request.body;
            const createdSchedule = yield model.create(body);
            if (!createdSchedule.id) {
                ctx.body = {
                    error: 'Error creating schedule',
                };
                return;
            }
            ctx.status = 201;
            ctx.body = {
                message: 'Schedule created successfully',
                data: {
                    id: createdSchedule.id,
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
            const updatedSchedule = yield model.update(id, body);
            if (!updatedSchedule) {
                ctx.body = {
                    errors: 'Error updating schedule',
                };
            }
            ctx.body = {
                message: 'Schedule updated successfully',
            };
        });
    }
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const removedSchedule = yield model.remove(id);
            if (!removedSchedule) {
                ctx.body = {
                    errors: 'Error removing schedule',
                };
            }
            ctx.body = {
                message: 'Schedule removed successfully',
            };
        });
    }
    static get(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ctx.params.id;
            const schedule = yield model.get(id);
            ctx.body = { schedule };
            ctx.status = schedule ? 200 : 204;
        });
    }
    static getAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = ctx.request.query;
            const schedules = yield model.getAll(params);
            ctx.body = { schedules };
            // ctx.status = schedules.length > 0 ? 200 : 204;
        });
    }
}
exports.SchedulesController = SchedulesController;
