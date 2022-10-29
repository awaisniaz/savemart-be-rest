"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("../Controller/user");
var user_router = express_1.default.Router();
user_router.post('/login', user_1.usercontroller === null || user_1.usercontroller === void 0 ? void 0 : user_1.usercontroller.login);
user_router.post('/register', user_1.usercontroller === null || user_1.usercontroller === void 0 ? void 0 : user_1.usercontroller.register);
exports.default = user_router;
