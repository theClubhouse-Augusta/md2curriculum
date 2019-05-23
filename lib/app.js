"use strict";

var _input = _interopRequireDefault(require("./input"));

var _processFile = _interopRequireDefault(require("./fileProcessing/processFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require('util');

var input = new _input["default"]("CLI");
var process1 = new _processFile["default"]();
process1.processFile(input.filePath).then(function (data) {
  console.log(data);
}); // let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })
// // process = process.processFile();
// console.log(util.inspect(process, false, null, true /* enable colors */))