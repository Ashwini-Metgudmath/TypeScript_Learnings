"use strict";
exports.__esModule = true;
var bear_model_1 = require("./bear.model");
var bear = new bear_model_1.Bear(3);
if (bear instanceof bear_model_1.Bear) {
    console.log("bear is instanceof Bear");
}
