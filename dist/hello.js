"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = __importDefault(require("express")); // lib es7
var app = express_1.default();
app.get('/', function (req, res) {
    console.log(123);
    res.send('hello world !');
});
var server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});
//# sourceMappingURL=hello.js.map