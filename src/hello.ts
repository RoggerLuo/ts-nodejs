// server.ts

// const express = require("express");
import express from "express" // lib es7

const app = express();
app.get('/', function (req: any, res: { send: (arg0: any) => void; }) {
    console.log(123);
    res.send('hello world !');
});
const server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});