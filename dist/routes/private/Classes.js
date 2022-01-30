"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Classes_1 = require("../../controllers/Classes");
const routes = new koa_router_1.default({
    prefix: '/classes',
});
routes.post('/', Classes_1.ClassesController.create);
routes.put('/:id', Classes_1.ClassesController.update);
routes.delete('/:id', Classes_1.ClassesController.remove);
exports.default = routes;
