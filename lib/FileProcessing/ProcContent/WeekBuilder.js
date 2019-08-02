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
    this._headingPattern = /(# Week.*)/g;
    this._activityPattern = /(## Resource.*)|(## Exercise.*)|(## Quiz.*)/g;
    this._activityStopPattern = /---/g;
    this._contentObj = {};
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
    }
    /* Content Builder stuff */

  }, {
    key: "checkHeading",
    value: function checkHeading(line, headingPattern) {
      if (headingPattern.test(line)) {
        return line;
      }

      return false;
    }
  }, {
    key: "checkActivityHeading",
    value: function checkActivityHeading(line, activityPattern) {
      if (activityPattern.test(line)) {
        return line;
      }

      return false;
    }
  }, {
    key: "checkActivityStop",
    value: function checkActivityStop(line, activityStopPattern) {
      if (activityStopPattern.test(line)) {
        return line;
      }

      return false;
    }
  }, {
    key: "createPropName",
    value: function createPropName(line) {
      return line.replace(/^#+/g, "").split(" ").join("");
    }
  }, {
    key: "addActivityContent",
    value: function addActivityContent(line) {
      return line + "\n";
    }
  }, {
    key: "addDefaultContent",
    value: function addDefaultContent(line, activityStop) {
      return !activityStop ? line + "\n" : "";
    }
  }, {
    key: "buildContent",
    value: function buildContent(headingPattern, activityPattern, activityStopPattern) {
      var _this = this;

      var activeHeading = false,
          activeActivity = false,
          activityStop = false; // Break file string into array

      var fileArray = this._data.split("\n");

      return this._weekContent = fileArray.reduce(function (accumulator, line, index) {
        // Check if is Heading declaration
        // If so set active heading
        if (_this.checkHeading(line, headingPattern)) {
          activeHeading = _this.createPropName(line);
          accumulator[activeHeading] = {};
          accumulator[activeHeading]["content"] = "";
        } // Check if activity heading, and set active Activity


        if (_this.checkActivityHeading(line, activityPattern)) {
          activeActivity = _this.createPropName(line);
          accumulator[activeHeading][activeActivity] = accumulator[activeHeading].hasOwnProperty(activeActivity) ? accumulator[activeHeading][activeActivity] : "";
        } // Check is Activity stop
        // If so unset active activity


        if (_this.checkActivityStop(line, activityStopPattern)) {
          activeActivity = false;
          activityStop = true;
        } // Check  is an active activity and active heading
        // If so set default content


        if (activeHeading && !activeActivity) {
          accumulator[activeHeading]["content"] += _this.addDefaultContent(line, activityStop);
        } // Check  is an active activity and active heading
        // If so set Activity content


        if (activeHeading && activeActivity) {
          accumulator[activeHeading][activeActivity] += _this.addActivityContent(line);
        } // reset Activity Stop


        if (!activeActivity && activityStop) {
          activityStop = false;
        }

        return accumulator;
      }, {});
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
    key: "content",
    get: function get() {
      this.buildContent(this._headingPattern, this._activityPattern, this._activityStopPattern);
      return this._weekContent;
    }
  }]);

  return Week;
}();

exports["default"] = Week;