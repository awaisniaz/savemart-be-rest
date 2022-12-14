"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./Routes/user"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', user_1.default);
app.listen(port, function () {
    console.log("I am Listening");
});
