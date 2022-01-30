"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Professors_1 = require("../../controllers/Professors");
const routes = new koa_router_1.default({
    prefix: '/professors',
});
routes.put('/:id', Professors_1.ProfessorsController.update);
routes.delete('/:id', Professors_1.ProfessorsController.remove);
exports.default = routes;
