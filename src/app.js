import Input from "./input";
import Process from "./FileProcessing/ProcessFile";

const util = require('util');

const input = new Input("CLI");
let process1 = new Process(input.filePath);
process1.processFile()
    .then((data) => {
        console.log(
            '\x1b[36m%s\x1b[0m',
            util.inspect(data, false, null, true
            ))
    }, function (err) {
        console.error(err);
    })


// let process2 = new Process(input.filePath);
// Promise.all([
//     process1.processFile(),
//     process2.processFile()
// ]).then(d => {
// //    d.forEach(p => console.log(p))
// })