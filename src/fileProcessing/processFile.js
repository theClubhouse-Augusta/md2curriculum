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

