const fs = require("fs"),
  readline = require("readline");

export default class Process {
    constructor (filePath) {
        this.file = filePath;
        
        this.readFile(this.file);
    }
    readFile(file) {
        fs.readFile(file, { encoding: "utf-8" }, function(err, data) {
            if (!err) {
              var lineReader = readline.createInterface({
                input: fs.createReadStream(file)
              });
          
              lineReader.on("line", function(line) {
                console.log("Line from file:", line);
              });
            } else {
              console.log(err);
            }
          });
    }
}
