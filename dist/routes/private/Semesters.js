"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Semesters_1 = require("../../controllers/Semesters");
const routes = new koa_router_1.default({
    prefix: '/semesters',
});
routes.post('/', Semesters_1.SemestersController.create);
routes.put('/:id', Semesters_1.SemestersController.update);
routes.delete('/:id', Semesters_1.SemestersController.remove);
exports.default = routes;
