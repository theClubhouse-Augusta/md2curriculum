"use strict";

var _input = _interopRequireDefault(require("./input"));

var _process = _interopRequireDefault(require("./process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var input = new _input["default"]("CLI");
var processFile = new _process["default"](input.filePath);