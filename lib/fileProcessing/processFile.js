"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import ProcessLine from "./processLine";
var fs = require("fs"); // const { createInterface } = require("readline");
// const util = require('util');


var Process =
/*#__PURE__*/
function () {
  function Process(filePath) {
    _classCallCheck(this, Process);

    this.filePath = filePath;
  }

  _createClass(Process, [{
    key: "processFile",
    value: function processFile() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        fs.readFile(_this.filePath, function (err, data) {
          resolve(data);
        });
      });
    }
  }]);

  return Process;
}();

exports["default"] = Process;