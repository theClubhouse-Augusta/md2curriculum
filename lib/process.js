"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _processLine = _interopRequireDefault(require("./processLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    this.filePath = filePath;
    this.fileReader(this.filePath);
  }

  _createClass(Process, [{
    key: "fileReader",
    value: function fileReader(file) {
      fs.readFile(file, {
        encoding: "utf-8"
      }, function (err, data) {
        if (!err) {
          createLineReader(file);
        } else {
          console.log(err);
        }
      });
    }
  }, {
    key: "createLineReader",
    value: function createLineReader(file) {
      this.lineReader = readline.createInterface({
        input: fs.createReadStream(file)
      });
      startReading();
    }
  }, {
    key: "startReading",
    value: function startReading() {
      this.lineReader.on("line", function (line) {
        this.file = new _processLine["default"](line);
      });
    }
  }]);

  return Process;
}();

exports["default"] = Process;