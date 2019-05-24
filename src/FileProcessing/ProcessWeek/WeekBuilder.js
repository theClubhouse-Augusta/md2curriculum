export default class Week {
  constructor(data) {
    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._weekPattern = /(# Week.*)/g;

    this._exercisesPattern = /(Exercises)/g;
  }

  get weekCount() { 
    addWeekCount();
    return this._weekCount; 
  }
  get weekNames() { 
    addWeekNames();
    return this._weekNames; 
  }


  addWeekNames() {
    let weekNames = [];
    let match;

    while (match = this._weekPattern.exec(this._data)) {
      weekNames.push(match[0]);
    }

    return this._weekNames = weekNames;
  }

  addWeekCount() {
    let weekCounter = 0;
    let match;

    while (match = this._weekPattern.exec(this._data)) {
      weekCounter++;
    }

    return this._weekCount = weekCounter;
  }

  addWeekContent() {
    let match;
    let week = {};
    let weekIndex = 0;
    let weekContent = "";

    // 1. Find the beginning of a week
    // 2. Find the next match index
    // 3. Add the sub string between those 2 indeces

    while (match = this._weekPattern.exec(this._data)) {

      console.log("Week Index:", weekIndex);
      if(match.index === 0) {
        continue;
      }
      if(weekIndex === 0 && match.index !== 0) {
        weekIndex = match.index;
        continue;
      }

      
      weekContent = this._data.substring(weekIndex, match.index);

      console.log("\x1b[35m", weekContent);
      weekIndex = match.index;
      // week.match[0] = weekContent;
      // console.log(match[0], match.index)

      // weekBuilder.push
    }

  }


}


