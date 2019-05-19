import ProcessLine from "./processLine";

const fs = require("fs"),
  readline = require("readline");

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;

    this.fileReader(this.filePath);
  }

  fileReader = function (file) {
    fs.readFile(file, { encoding: "utf-8" }, function(err, data) {
      if (!err) {
        this.createLineReader(file);
      } else {
        console.log(err);
      }
    });
  }

  createLineReader = function (file) {
    this.lineReader = readline.createInterface({
      input: fs.createReadStream(file)
    });

    startReading();
  }

  startReading = function () {
    this.lineReader.on("line", function(line) {

      this.file = new ProcessLine(line);
    });
  }
}