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

var _require = require("fs"),
    createReadStream = _require.createReadStream;

var _require2 = require("readline"),
    createInterface = _require2.createInterface;

var util = require('util');

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
      var data = '';
      return new Promise(function (resolve, reject) {
        console.log('**************************');
        console.log('filePath', this.filePath);
        createInterface({
          input: createReadStream(this.filePath)
        }).on("line", function (line) {
          data += line + '\n';
        }).on("close", function (f) {
          resolve(data);
        });
      });
    }
  }]);

  return Process;
}();

exports["default"] = Process;