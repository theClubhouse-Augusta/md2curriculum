"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Convert;

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

var _require = require('child_process'),
    exec = _require.exec;

function Convert(data) {
  exec('m2j 1.txt', function (err, stdout, stderr) {
    if (err) {
      // node couldn't execute the command
      return;
    } // the *entire* stdout and stderr (buffered)


    console.log("stdout: ".concat(stdout));
    console.log("stderr: ".concat(stderr));
  });
}