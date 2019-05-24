"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Week =
/*#__PURE__*/
function () {
  function Week(data) {
    _classCallCheck(this, Week);

    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._weekPattern = /(# Week.*)/g;
    this._exercisesPattern = /(Exercises)/g;
  }

  _createClass(Week, [{
    key: "addWeekNames",
    value: function addWeekNames() {
      var weekNames = [];
      var match;

      while (match = this._weekPattern.exec(this._data)) {
        weekNames.push(match[0]);
      }

      return this._weekNames = weekNames;
    }
  }, {
    key: "addWeekCount",
    value: function addWeekCount() {
      var weekCounter = 0;
      var match;

      while (match = this._weekPattern.exec(this._data)) {
        weekCounter++;
      }

      return this._weekCount = weekCounter;
    }
  }, {
    key: "addWeekContent",
    value: function addWeekContent() {
      var match;
      var week = {};
      var weekIndex = 0;
      var weekContent = ""; // 1. Find the beginning of a week
      // 2. Find the next match index
      // 3. Add the sub string between those 2 indeces

      while (match = this._weekPattern.exec(this._data)) {
        console.log("Week Index:", weekIndex);

        if (weekIndex === 0 && match.index !== 0) {
          weekIndex = match.index;
          continue;
        }

        weekContent = this._data.substring(weekIndex, match.index);
        console.log("\x1b[35m", weekContent);
        weekIndex = match.index; // week.match[0] = weekContent;
        // console.log(match[0], match.index)
        // weekBuilder.push
      }
    }
  }, {
    key: "weekCount",
    get: function get() {
      addWeekCount();
      return this._weekCount;
    }
  }, {
    key: "weekNames",
    get: function get() {
      addWeekNames();
      return this._weekNames;
    }
  }]);

  return Week;
}();

exports["default"] = Week;