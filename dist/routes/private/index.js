"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const routes_1 = require("../../utils/routes");
const routes = new koa_router_1.default({
    prefix: '/admin',
});
try {
    (0, routes_1.setupFileRoutesByFolder)(routes, __dirname);
}
catch (err) {
    console.error('routes error');
    console.error(err);
}
exports.default = routes;
