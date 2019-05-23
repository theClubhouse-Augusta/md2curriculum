export default class ProcessLine {
  constructor(line) {
    this.processedLine = {
      "line": line
    };

    
    this.countWeek();
  }
  countWeek () {
    let reWeek = /[# Week]/;
    // let check = this.line.match(reWeek);
    console.log();
  }
}
