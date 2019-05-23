import Analyze from  "./AnalyzeFile";

const fs = require("fs");
// const { createInterface } = require("readline");
// const util = require('util');

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;
  }

  processFile() {
    return new Promise ((resolve, reject) => {

      // Read a File
      fs.readFile(this.filePath, "utf8", (err, data) => {
        if (err) throw err;
        
        // Call File Processes
        /* Options:
         * Week
        */
        Analyze.call(this, data, "Week");
        // this.listWeeks(data);

        resolve(this);
      });
    });
  }

}

/*
import ProcessLine from "./processLine";

const { createReadStream } = require("fs");
const { createInterface } = require("readline");
const util = require('util');

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;
  }

  processFile() {
    var data = '';

    return new Promise(function(resolve, reject){
      createInterface({
        input: createReadStream(this.filePath)
      })
      .on("line", line => {
        data += line + '\n';
      })
      .on("close", f => {
        resolve(data)
      })
    })
  }
}
*/
