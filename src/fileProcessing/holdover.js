import ProcessLine from "./processLine";

const fs = require("fs");
// const { createInterface } = require("readline");
// const util = require('util');

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;
  }

  processFile() {
    return new Promise ((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        console.log(data);
      });
    });
  }
}
