
export default function Analyze (data, type) {
    let rePatterns = {
      "week": /(Week.*)/g,
    }
  
    addWeekCount.call(this, data, rePatterns.week);
    addWeekNames.call(this, data, rePatterns.week);


    return this;
  }

function addWeekNames (data, pattern) {
  let weekNames = [];
  let match;

  while (match = pattern.exec(data)) {
    weekNames.push(match[0]);
  }

  return this.weekNames = weekNames;
} 


  
function addWeekCount (data, pattern) {
  let weekCounter =  0;
  let match;

  while (match = pattern.exec(data)) {
    weekCounter ++;
    // console.log("Found", match[0], "at", match.index);
  }

  return this.weekCount = weekCounter;
}



