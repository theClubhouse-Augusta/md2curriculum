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
    this._activityPattern = /(## Resource.*)|(## Exercise.*)/g;
    this._weekContent = {};
  }

  _createClass(Week, [{
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
    key: "addWeekNames",
    value: function addWeekNames() {
      var weekNames = [];
      var match;

      while (match = this._weekPattern.exec(this._data)) {
        weekNames.push(match[0]);
      }

      return this._weekNames = weekNames;
    } // Adds the content between weeks to a week object
    // Starts matching weeks at first week. Any content before won't be added
    // Format example: `# Week 1`

  }, {
    key: "addWeekContent",
    value: function addWeekContent() {
      var match;
      var week = {};
      var weekIndex = 0;
      var weekContent = "";
      var weekStart = "";

      while (match = this._weekPattern.exec(this._data)) {
        var weekPropName = "";

        if (match.index === 0) {
          continue;
        }

        weekContent = this.breakWeeksIntoActivities(this._data.substring(weekIndex, match.index));

        if (weekIndex === 0) {
          weekPropName = "Week1";
        } else {
          weekPropName = weekStart;
        }

        week[weekPropName] = weekContent; // ready for the next iteration

        weekStart = match[0].replace("#", "").split(" ").join("");
        weekIndex = match.index;
      }

      return this._weekContent = week;
    }
  }, {
    key: "breakWeeksIntoActivities",
    value: function breakWeeksIntoActivities(weekString) {
      var match;
      var activity = {};
      var activityIndex = 0;
      var activityContent = "";
      var activityStart = "";

      while (match = this._activityPattern.exec(weekString)) {
        var activityPropName = "";
        console.log("match index:", match.index, "\nThe match", match[0]);
        activityContent = weekString.substring(activityIndex, match.index); // if(activityIndex === 0) {
        //   activityPropName = "Activity1";
        // } else {
        //   activityPropName = activityStart;
        // }

        activityPropName = match[0];
        activity[activityPropName] = activityContent; // ready for the next iteration
        // activityStart = match[0].replace("#", "").split(" ").join("");

        activityIndex = match.index;
      }

      return activity;
    }
  }, {
    key: "weekCount",
    get: function get() {
      this.addWeekCount();
      return this._weekCount;
    }
  }, {
    key: "weekNames",
    get: function get() {
      this.addWeekNames();
      return this._weekNames;
    }
  }, {
    key: "weekContent",
    get: function get() {
      this.addWeekContent();
      return this._weekContent;
    }
  }]);

  return Week;
}();

exports["default"] = Week;