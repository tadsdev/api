"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const Environment_1 = require("./configs/Environment");
const routes_1 = __importDefault(require("./routes"));
const server = new koa_1.default();
server.use((0, koa_bodyparser_1.default)());
server.use((0, cors_1.default)());
server.use(routes_1.default.routes());
server.listen(Environment_1.PORT, () => console.log(`SERVER STARTED PORT ${Environment_1.PORT}`));
