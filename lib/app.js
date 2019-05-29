"use strict";

var _input = _interopRequireDefault(require("./input"));

var _ProcInit = _interopRequireDefault(require("./FileProcessing/ProcInit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require('util');

var input = new _input["default"]("CLI");
var process1 = new _ProcInit["default"](input.filePath);
process1.processFile().then(function (data) {
  console.log('\x1b[36m%s\x1b[0m', util.inspect(data, false, null, true));
}, function (err) {
  console.error(err);
}); // let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })