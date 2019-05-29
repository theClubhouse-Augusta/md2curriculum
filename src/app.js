import Input from "./input";
import Process from "./FileProcessing/ProcInit";
import Output from "./output";

const util = require("util");


module.exports = App;

function App(file) {
  const input = new Input(file);
  let process1 = new Process(input.filePath);

  process1.processFile().then(
    data => {
      Output(data);
    },
    function(err) {
      console.error(err);
    }
  );
}


    
// let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })
