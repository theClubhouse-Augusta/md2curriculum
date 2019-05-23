import Input from "./input";
import Process from "./fileProcessing/processFile";

const util = require('util');

const input = new Input("CLI");
let process1 = new Process(input.filePath);
let process2 = new Process(input.filePath);
Promise.all([
    process1.processFile(),
    process2.processFile()
]).then(d => {
//    d.forEach(p => console.log(p))
})
// process = process.processFile();

// console.log(util.inspect(process, false, null, true /* enable colors */))

