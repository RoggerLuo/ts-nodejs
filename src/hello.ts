// server.ts

// const express = require("express");
import express from "express" // lib es7
// const request = require('request'); //http请求模块
import path from 'path'
import fs from 'fs'

const app = express();
app.get('/', function (req: any, res: { send: (arg0: any) => void; }) {
    console.log(123);
    res.send('hello world !');
});
app.post('/post',(req:any, res)=>{
    res.send('this is a post')
})
const server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});