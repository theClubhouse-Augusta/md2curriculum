"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Analyze;

function Analyze(data, type) {
  var rePatterns = {
    "week": /(Week.*)/g
  };
  addWeekCount.call(this, data, rePatterns.week);
  addWeekNames.call(this, data, rePatterns.week);
  return this;
}

function addWeekNames(data, pattern) {
  var weekNames = [];
  var match;

  while (match = pattern.exec(data)) {
    weekNames.push(match[0]);
  }

  return this.weekNames = weekNames;
}

function addWeekCount(data, pattern) {
  var weekCounter = 0;
  var match;

  while (match = pattern.exec(data)) {
    weekCounter++; // console.log("Found", match[0], "at", match.index);
  }

  return this.weekCount = weekCounter;
}