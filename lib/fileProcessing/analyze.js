"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function _default(data, type) {
  _classCallCheck(this, _default);

  var rePatterns = {
    "week": /\s\# Week/g
  };
  return countWeek.call(this, data, rePatterns.week);
};

exports["default"] = _default;

function countWeek(data, pattern) {
  var weekCounter = 0;
  var match;

  while (match = pattern.exec(data)) {
    weekCounter++; // console.log("Found", match[0], "at", match.index);
  }

  this.weekCount = weekCounter;
  return this;
}