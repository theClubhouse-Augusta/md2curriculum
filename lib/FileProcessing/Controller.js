"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controller;

var _WeekBuilder = _interopRequireDefault(require("./ProcContent/WeekBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Controller(data, type) {
  // Build out Weeks with week count/names
  var week = new _WeekBuilder["default"](data); // this.WeekNames = week.weekNames;
  // this.WeekCount = week.weekCount;

  this.content = week.content;
  return this;
}