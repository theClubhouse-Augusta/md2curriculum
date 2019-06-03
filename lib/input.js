"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var path = require("path");

var fs = require("fs");

var Input = function Input(file) {
  _classCallCheck(this, Input);

  var filePath = ""; // This is assuming that the only arrays passed into the input will be a correct array. 

  if (typeof file !== "string") {
    // Assume its CLI array
    filePath = path.normalize(file[2]);
  } else {
    console.log("file  am I hear yet?");
    filePath = file;
  }

  try {
    fs.promises.access(filePath); // The check succeeded

    this.filePath = filePath;
    console.log(filePath + " exists");
  } catch (error) {
    // The check failed
    console.error(error);
  }
};

exports["default"] = Input;