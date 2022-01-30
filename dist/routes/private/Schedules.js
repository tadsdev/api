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
routes.post('/', Schedules_1.SchedulesController.create);
routes.put('/:id', Schedules_1.SchedulesController.update);
routes.delete('/:id', Schedules_1.SchedulesController.remove);
exports.default = routes;
