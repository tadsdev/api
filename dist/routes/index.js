"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const koa_router_1 = __importDefault(require("koa-router"));
const auth_1 = require("../middlewares/auth");
const router = new koa_router_1.default();
try {
    const modules = fs_1.default.readdirSync(__dirname);
    modules.forEach((module) => {
        if (module !== 'index.ts' && module !== 'validators') {
            const modulePath = path_1.default.join(__dirname, module, 'index.ts');
            router.use(auth_1.AuthMiddleware);
            const moduleRouter = require(modulePath).default;
            router.use(moduleRouter.routes());
        }
    });
}
catch (err) {
    console.error('routes error');
    console.error(err);
}
exports.default = router;
