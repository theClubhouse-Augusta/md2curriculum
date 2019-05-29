const path = require("path");

export default class Input {
  constructor(file) {
    // Read the 2nd arg, which should be file path
    // All args after should be options
    console.log(file);
    this.filePath = path.join(__dirname, file);
  }
}
