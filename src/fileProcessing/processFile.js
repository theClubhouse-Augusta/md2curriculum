// import ProcessLine from "./processLine";

const fs = require("fs");
// const { createInterface } = require("readline");
// const util = require('util');

export default class Process {
  constructor(filePath) {
    this.filePath = filePath;
  }

  processFile() {
    return new Promise ((resolve, reject) => {
      fs.readFile(this.filePath, (err, data) => {
        if (err) throw err;
        resolve(data);
      });
    });
  }
}