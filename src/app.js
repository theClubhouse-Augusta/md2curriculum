import Input from "./input";
import Process from "./FileProcessing/ProcInit";
import Output from "./output";

const util = require("util");


module.exports = App;
function App(file, options) {
  
  options ? options : {};
  
  try {
    var input = new Input(file);
  } catch (err) {
    console.error(err);
  }

  try {
    var process1 = new Process(input.filePath);

  } catch (err) {
    console.error(err);
  }
  
  process1.processFile().then(
    data => {
      Output(data);
    },
    function(err) {
      console.error(err);
    }
  );
}

/* 
Jekyll Style front matter
folder: Week$
default: readme.md

*/