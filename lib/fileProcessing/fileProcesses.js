"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countWeek = countWeek;

function countWeek(data) {
  console.log(this);
  var reWeek = /\s\# Week/g;
  var weekCounter = 0;
  var match;

  while (match = reWeek.exec(data)) {
    weekCounter++; // console.log("Found", match[0], "at", match.index);
  }

  this.weekCount = weekCounter;
  return this;
}