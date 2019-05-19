"use strict";

var _input = _interopRequireDefault(require("./input"));

var _processFile = _interopRequireDefault(require("./fileProcessing/processFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var input = new _input["default"]("CLI");
var process = new _processFile["default"](input.filePath); // console.log(process);