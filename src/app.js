import Input from "./input";
import Process from "./fileProcessing/processFile";

const input = new Input("CLI");
let process = new Process(input.filePath);

// console.log(process);
