"use strict";
/*let message = "Hello TpyeScript!";
console.log(message);*/
exports.__esModule = true;
var express = require("express");
var port = process.env.port || 1337;
var app = express();
app.listen(port);
console.log("Listening on port " + port);
