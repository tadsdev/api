"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const routes = new koa_router_1.default({
    prefix: '/auth',
});
routes.post('/', (ctx) => {
    console.log('auth');
});
exports.default = routes;
