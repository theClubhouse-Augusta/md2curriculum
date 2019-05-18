"use strict";

var fs = require("fs"),
    path = require("path"),
    readline = require("readline"); // read file presented as second argument


var filePath = path.join(__dirname, String(process.argv[2]));
fs.readFile(filePath, {
  encoding: "utf-8"
}, function (err, data) {
  if (!err) {
    var lineReader = readline.createInterface({
      input: fs.createReadStream(filePath)
    });
    lineReader.on("line", function (line) {
      console.log("Line from file:", line);
    });
  } else {
    console.log(err);
  }
});
/* TODOs
* Objects:
    - read CLI
    - get filename
    - process other arguments
    - read file with arguments
    - process read file other arguments
*
* Packages to Load
    - Babel (just to enable imports)
*
* Track line numbers
* Pattern match for '# Week'
* Pattern match for '# Topics'
* Pattern match for '# Exercise' in Week
* log how many weeks there are
* log how many topics there are
* log how many exercises there are per week
*/