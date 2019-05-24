export default class Week {
  constructor(data) {
    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._weekPattern = /(# Week.*)/g;
    this._weekContent = {};
    this._exercisesPattern = /(Exercises)/g;
  }

  get weekCount() { 
    this.addWeekCount();
    return this._weekCount; 
  }
  get weekNames() { 
    this.addWeekNames();
    return this._weekNames; 
  }
  get weekContent() {
    this.addWeekContent();
    return this._weekContent;
  }
  
  addWeekCount() {
    let weekCounter = 0;
    let match;

    while (match = this._weekPattern.exec(this._data)) {
      weekCounter++;
    }

    return this._weekCount = weekCounter;
  }

  addWeekNames() {
    let weekNames = [];
    let match;

    while (match = this._weekPattern.exec(this._data)) {
      weekNames.push(match[0]);
    }

    return this._weekNames = weekNames;
  }

  // Adds the content between weeks to a week object
  // Starts matching weeks at first week. Any content before won't be added
  // Format example: `# Week 1`
  addWeekContent() {
    let match;
    let week = {};
    let weekIndex = 0;
    let weekContent = "";
    let weekStart = "";

    while (match = this._weekPattern.exec(this._data)) {
      let weekPropName = "";

      if(match.index === 0) {
        continue;
      }

      weekContent = this._data.substring(weekIndex, match.index);

      if(weekIndex === 0) {
        weekPropName = "Week1";
      } else {
        weekPropName = weekStart;
      }

      week[weekPropName] = weekContent;

      // ready for the next iteration
      weekStart = match[0].replace("#", "").split(" ").join("");
      weekIndex = match.index;
    }
    return this._weekContent = week;
  }
}


