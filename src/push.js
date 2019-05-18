const fs = require("fs"),
  readline = require("readline");



fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
  if (!err) {
    var lineReader = readline.createInterface({
      input: fs.createReadStream(filePath)
    });

    lineReader.on("line", function(line) {
      console.log("Line from file:", line);
    });
  } else {
    console.log(err);
  }
});
