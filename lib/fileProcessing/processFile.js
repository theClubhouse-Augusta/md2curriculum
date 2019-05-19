"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _processLine = _interopRequireDefault(require("./processLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("fs"),
    createReadStream = _require.createReadStream;

var _require2 = require("readline"),
    createInterface = _require2.createInterface;

var Process = function Process(filePath) {
  _classCallCheck(this, Process);

  this.filePath = filePath;
  var self = this;
  var file = [];
  var lineReader = createInterface({
    input: createReadStream(this.filePath)
  });
  var promise = new Promise(function (resolve, reject) {
    try {
      lineReader.on("line", function (line) {
        var fileLine = new _processLine["default"](line);
        file.push(fileLine.line);
      }).on("close", function () {
        self.file = file;
        console.log(self);
        resolve(self);
      });
    } catch (error) {
      reject(Error(error));
    }
  });
  promise.then(function (result) {
    return result;
  }, function (err) {
    console.log(err); // Error: "It broke"
  });
};

exports["default"] = Process;