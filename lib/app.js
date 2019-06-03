"use strict";

var _input = _interopRequireDefault(require("./input"));

var _ProcInit = _interopRequireDefault(require("./FileProcessing/ProcInit"));

var _output = _interopRequireDefault(require("./output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require("util");

module.exports = App;

function App(file) {
  try {
    console.log(file[1]);
    var input = new _input["default"](file);
    console.log(input);
  } catch (err) {
    console.error(err);
  } // try {
  //   var process1 = new Process(input.filePath);
  // } catch (err) {
  //   console.error(err);
  // }
  // process1.processFile().then(
  //   data => {
  //     Output(data);
  //   },
  //   function(err) {
  //     console.error(err);
  //   }
  // );

} // let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })