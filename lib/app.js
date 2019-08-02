"use strict";

var _input = _interopRequireDefault(require("./input"));

var _ProcInit = _interopRequireDefault(require("./FileProcessing/ProcInit"));

var _output = _interopRequireDefault(require("./output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = require("util");

module.exports = App;

function App(file, options) {
  options ? options : {};

  try {
    var input = new _input["default"](file);
  } catch (err) {
    console.error(err);
  }

  try {
    var process1 = new _ProcInit["default"](input.filePath);
  } catch (err) {
    console.error(err);
  }

  process1.processFile().then(function (data) {
    (0, _output["default"])(data);
  }, function (err) {
    console.error(err);
  });
}
/* 
  Possible Options object block
  {
    folderName
      folderName
  }
*/