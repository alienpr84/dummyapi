"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
function main() {
    var port = process.env.PORT || 5000;
    app_1.default.listen(port, function () { return console.log('Server listen on port: ', port); });
}
main();
