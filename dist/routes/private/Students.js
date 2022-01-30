"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Students_1 = require("../../controllers/Students");
const routes = new koa_router_1.default({
    prefix: '/students',
});
routes.put('/:id', Students_1.StudentsController.update);
routes.delete('/:id', Students_1.StudentsController.remove);
exports.default = routes;
