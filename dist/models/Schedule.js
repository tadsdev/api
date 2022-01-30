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
class Schedule {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdSchedule = yield this.prisma.schedules.create({
                data: Object.assign({}, body),
            });
            return createdSchedule;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSchedule = yield this.prisma.schedules.update({
                where: { id },
                data: Object.assign({}, body),
            });
            return updatedSchedule.id;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedSchedule = yield this.prisma.schedules.delete({
                where: { id },
            });
            return removedSchedule.id;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield this.prisma.schedules.findUnique({
                where: { id },
                include: {
                    subject: true,
                },
            });
            return schedule;
        });
    }
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedules = yield this.prisma.schedules.findMany({
                where: {
                    OR: {
                        type: params.type,
                        subject: {
                            class: {
                                slug: params.slug,
                                id: params.classId,
                            },
                            semesterId: params.semesterId,
                            professorId: params.professorId,
                        },
                    },
                },
                include: {
                    subject: {
                        include: {
                            class: true,
                            data: true,
                            professor: {
                                include: {
                                    user: true,
                                },
                            },
                            semester: true,
                        },
                    },
                },
            });
            const schedulesByWeekday = {};
            schedules.forEach((schedule) => {
                if (schedule.weekday in schedulesByWeekday) {
                    schedulesByWeekday[schedule.weekday].push(schedule);
                }
                else {
                    schedulesByWeekday[schedule.weekday] = [];
                    schedulesByWeekday[schedule.weekday].push(schedule);
                }
            });
            return schedulesByWeekday;
        });
    }
}
exports.default = Schedule;
