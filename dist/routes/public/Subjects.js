"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Subjects_1 = require("../../controllers/Subjects");
const routes = new koa_router_1.default({
    prefix: '/subjects',
});
routes.get('/:id', Subjects_1.SubjectsController.get);
routes.get('/', Subjects_1.SubjectsController.getAll);
exports.default = routes;
