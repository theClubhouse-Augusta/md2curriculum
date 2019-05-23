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
    this._rePatterns = {
      "week": /(Week.*)/g
    };
    this.week = {};
    this.addWeekCount();
    this.addWeekNames();
  } // set Week(week) { this.Week = week }


  _createClass(Week, [{
    key: "addWeekNames",
    value: function addWeekNames() {
      var weekNames = [];
      var match;

      while (match = this._rePatterns.week.exec(this._data)) {
        weekNames.push(match[0]);
      }

      return this._weekNames = weekNames;
    }
  }, {
    key: "addWeekCount",
    value: function addWeekCount() {
      var weekCounter = 0;
      var match;

      while (match = this._rePatterns.week.exec(this._data)) {
        weekCounter++; // console.log("Found", match[0], "at", match.index);
      }

      return this._weekCount = weekCounter;
    }
  }, {
    key: "weekCount",
    get: function get() {
      return this._weekCount;
    }
  }, {
    key: "weekNames",
    get: function get() {
      return this._weekNames;
    }
  }]);

  return Week;
}();

exports["default"] = Week;