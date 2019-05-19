const path = require("path");

export default class Input {
  constructor (inputType) {

    // Read the 2nd arg, which should be file path
    // All args after should be options
    if(inputType === "CLI") {
      this.filePath = path.join(__dirname, String(process.argv[2]));
    }
  }
}

