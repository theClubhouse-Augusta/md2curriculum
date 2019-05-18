const path = require("path");

export default class Input {
  constructor () {
    // this.fileInput = path.join(__dirname, String(process.argv[2]));
    this.cliArgs = process.argv;
    this.parseArguments();
  }

  parseArguments() {
    console.log(this.cliArgs);
    
    
    // this.fileInput.forEach(function (argInput) {
    //   console.log(argInput);
    // }); 
  }
  parseFilePath () {

  }
}

