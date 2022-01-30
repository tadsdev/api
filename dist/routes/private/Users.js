"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const Users_1 = require("../../controllers/Users");
const routes = new koa_router_1.default({
    prefix: '/users',
});
routes.post('/', Users_1.UsersController.create);
routes.put('/:id', Users_1.UsersController.update);
routes.delete('/:id', Users_1.UsersController.remove);
exports.default = routes;
