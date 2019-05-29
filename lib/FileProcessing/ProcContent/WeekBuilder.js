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
    } // Recursive func that takes a pattern (heading level) and tests it against headings/subheadings

  }, {
    key: "buildContent",
    value: function buildContent(heading) {
      // Base Object where all content resides
      var contentObj = {},
          currentTopLevel = {},
          currentActivity = {};
      var i = 0; // TODO:
      // Make function recursively called to break object into more controllable chunks

      var headingLevel = !heading ? "#" : heading; // Break file string into array

      var fileArray = this._data.split("\n"); // Regex Tests for sections


      var headingRegex = RegExp("^".concat(headingLevel, " .*"), "g");
      var exerciseRegex = RegExp("^## Exercise.*", "g");
      var resourceRegex = RegExp("^## Resource.*", "g");

      while (i < fileArray.length) {
        // Top Level heading
        if (headingRegex.test(fileArray[i])) {
          currentTopLevel = fileArray[i].replace("#", "").split(" ").join(""); // Initialize heading

          contentObj[currentTopLevel] = {};
          contentObj[currentTopLevel]["content"] = fileArray[i];
        } // Test and Set Activity Heading
        // Todo: What if Exercise initialized w/o heading
        else if (exerciseRegex.test(fileArray[i]) || resourceRegex.test(fileArray[i])) {
            currentActivity = fileArray[i].replace("##", "").split(" ").join("");
            contentObj[currentTopLevel][currentActivity] = fileArray[i] + "\n";
          } // Test/Set Exercise Ending
          // Reset Current Activity
          else if (fileArray[i] === "---" && Object.keys(currentActivity).length > 0) {
              currentActivity = {};
            } // Test/Set Current Activity is active
            // Add Activity Content
            else if (Object.keys(currentActivity).length > 0) {
                contentObj[currentTopLevel][currentActivity] += fileArray[i] + "\n";
              } else {
                contentObj[currentTopLevel]["content"] += fileArray[i] + "\n";
              }

        i++;
      }

      return this._weekContent = contentObj;
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
      this.buildContent();
      return this._weekContent;
    }
  }]);

  return Week;
}();

exports["default"] = Week;