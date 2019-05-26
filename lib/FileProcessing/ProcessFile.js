"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AnalyzeFile = _interopRequireDefault(require("./AnalyzeFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        // Read a File
        fs.readFile(_this.filePath, "utf8", function (err, data) {
          if (err) throw err; // Call File Processes

          /* Options:
           * Week
          */

          _AnalyzeFile["default"].call(_this, data, "Markdown"); // this.listWeeks(data);


          resolve(_this);
        });
      });
    }
  }]);

  return Process;
}();
/*
import ProcessLine from "./processLine";

const { createReadStream } = require("fs");
const { createInterface } = require("readline");
const util = require('util');

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;
  }

  processFile() {
    var data = '';

    return new Promise(function(resolve, reject){
      createInterface({
        input: createReadStream(this.filePath)
      })
      .on("line", line => {
        data += line + '\n';
      })
      .on("close", f => {
        resolve(data)
      })
    })
  }
}
*/


exports["default"] = Process;