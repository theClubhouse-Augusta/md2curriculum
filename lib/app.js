"use strict";

var _input = _interopRequireDefault(require("./input"));

var _ProcInit = _interopRequireDefault(require("./FileProcessing/ProcInit"));

var _output = _interopRequireDefault(require("./output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require("util");

module.exports = App;

function App(file) {
  var input = new _input["default"](file);
  var process1 = new _ProcInit["default"](input.filePath);
  process1.processFile().then(function (data) {
    (0, _output["default"])(data);
  }, function (err) {
    console.error(err);
  });
} // let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })