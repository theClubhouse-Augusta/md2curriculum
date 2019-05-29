"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var path = require("path");

var Input = function Input(file) {
  _classCallCheck(this, Input);

  // Read the 2nd arg, which should be file path
  // All args after should be options
  this.filePath = path.join(__dirname, file);
};

exports["default"] = Input;