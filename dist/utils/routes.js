"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFileRoutesByFolder = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
function setupFileRoutesByFolder(router, root) {
    const modules = (0, fs_1.readdirSync)(root);
    modules.forEach((file) => {
        const filename = file.substr(0, file.lastIndexOf('.'));
        const folderPath = path_1.default.join(root, file);
        if (filename === 'index' || folderPath.includes('validators'))
            return;
        if ((0, fs_1.lstatSync)(folderPath).isDirectory()) {
            setupFileRoutesByFolder(router, folderPath);
        }
        else {
            const module = require(path_1.default.join(root, file)).default;
            router.use(module.routes());
        }
    });
}
exports.setupFileRoutesByFolder = setupFileRoutesByFolder;
