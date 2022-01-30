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
routes.post('/', Subjects_1.SubjectsController.create);
routes.put('/:id', Subjects_1.SubjectsController.update);
routes.delete('/:id', Subjects_1.SubjectsController.remove);
exports.default = routes;
