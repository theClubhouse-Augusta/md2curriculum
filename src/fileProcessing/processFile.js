import ProcessLine from "./processLine";

const { createReadStream } = require("fs");
const { createInterface } = require("readline");

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;

    let self = this;
    let file = [];

    let lineReader = createInterface({
      input: createReadStream(this.filePath)
    });

    var promise = new Promise(function(resolve, reject) {
      try {
        lineReader
          .on("line", line => {
            let fileLine = new ProcessLine(line);

            file.push(fileLine.line);
          })
          .on("close", () => {
            self.file = file;
            console.log(self);
            resolve(self);
          });
      } catch (error) {
        reject(Error(error));
      }
    });

    promise.then(
      function(result) {
        return result;
      },
      function(err) {
        console.log(err); // Error: "It broke"
      }
    );
  }
}
