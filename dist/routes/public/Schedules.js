"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Schedules_1 = require("../../controllers/Schedules");
const routes = new koa_router_1.default({
    prefix: '/schedules',
});
routes.get('/:id', Schedules_1.SchedulesController.get);
routes.get('/', Schedules_1.SchedulesController.getAll);
exports.default = routes;
