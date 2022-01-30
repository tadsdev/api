"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const SubjectData_1 = require("../../controllers/SubjectData");
const routes = new koa_router_1.default({
    prefix: '/subject-data',
});
routes.get('/:id', SubjectData_1.SubjectDataController.get);
routes.get('/', SubjectData_1.SubjectDataController.getAll);
exports.default = routes;
