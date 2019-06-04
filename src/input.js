const path = require("path");
const fs = require("fs");

export default class Input {
  constructor(file) {

    let filePath = "";

    // This is assuming that the only arrays passed into the input will be a correct array. 
    if(typeof file !== "string" ) {
      // Assume its CLI array
      filePath = path.normalize(file[2]);
    } else {
      filePath = file;
    } 

      try {
        fs.promises.access(filePath);
        // The check succeeded
        this.filePath = filePath;
        console.log(filePath + " exists");
    } catch (error) {
        // The check failed
        console.error(error)
    }

  }
}
