"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs"),
    readline = require("readline");

var Process =
/*#__PURE__*/
function () {
  function Process(filePath) {
    _classCallCheck(this, Process);

    this.file = filePath;
    this.readFile(this.file);
  }

  _createClass(Process, [{
    key: "readFile",
    value: function readFile(file) {
      fs.readFile(file, {
        encoding: "utf-8"
      }, function (err, data) {
        if (!err) {
          var lineReader = readline.createInterface({
            input: fs.createReadStream(file)
          });
          lineReader.on("line", function (line) {
            console.log("Line from file:", line);
          });
        } else {
          console.log(err);
        }
      });
    }
  }]);

  return Process;
}();

exports["default"] = Process;