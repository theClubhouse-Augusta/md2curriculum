"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Convert;

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

function Convert(data) {
  // Markdown it so far only html
  // var result = md.render(data);
  // console.log(result);
  // M2J cli style only parsing front-matter
  exec('m2j 1.txt', function (err, stdout, stderr) {
    if (err) {
      // node couldn't execute the command
      return;
    } // the *entire* stdout and stderr (buffered)


    console.log("stdout: ".concat(stdout));
    console.log("stderr: ".concat(stderr));
  });
}