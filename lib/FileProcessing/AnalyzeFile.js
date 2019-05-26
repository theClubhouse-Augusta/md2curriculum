"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Analyze;

var _WeekBuilder = _interopRequireDefault(require("./ProcessWeek/WeekBuilder"));

var _convert = _interopRequireDefault(require("./json-converter/convert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Analyze(data, type) {
  if (type === "Markdown") {
    (0, _convert["default"])(data);
    console.log("trying Markdown");
    return this;
  } // Build out Weeks with week count/names


  var week = new _WeekBuilder["default"](data); // this.WeekNames = week.weekNames;
  // this.WeekCount = week.weekCount;

  this.WeekContent = week.weekContent;
  return this;
}