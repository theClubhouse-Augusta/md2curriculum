const path = require("path");

export default class Input {
  constructor () {
    // this.fileInput = path.join(__dirname, String(process.argv[2]));
    this.readFilePath(process.argv);
  }


/*
* Currently to pass CLI file path as argument 2
*/
  readFilePath(filePath) {

    this.parseFilePath(this.cliArgs[2]);

    
    // this.fileInput.forEach(function (argInput) {
    //   console.log(argInput);
    // }); 
  }
  readFilePath (filePath) {

  }
}

