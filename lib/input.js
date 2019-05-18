"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var path = require("path");

var Input =
/*#__PURE__*/
function () {
  function Input() {
    _classCallCheck(this, Input);

    // this.fileInput = path.join(__dirname, String(process.argv[2]));
    this.cliArgs = process.argv;
    this.parseArguments();
  }

  _createClass(Input, [{
    key: "parseArguments",
    value: function parseArguments() {
      console.log(this.cliArgs); // this.fileInput.forEach(function (argInput) {
      //   console.log(argInput);
      // }); 
    }
  }, {
    key: "parseFilePath",
    value: function parseFilePath() {}
  }]);

  return Input;
}();

exports["default"] = Input;