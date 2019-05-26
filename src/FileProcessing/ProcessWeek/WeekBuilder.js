export default class Week {
  constructor(data) {
    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._weekPattern = /(# Week.*)/g;
    this._activityPattern = /(## Resource.*)|(## Exercise.*)/g;
    this._weekContent = {};
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


  // Recursive func that takes a pattern (heading level) and tests it against headings/subheadings
  addWeekContent(heading) {
    let match;
    let week = {};
    let weekIndex = 0;
    let weekContent = "";
    let weekStart = "";

    let headingLevel = !heading ? "#" : heading;
    let regexHeading = RegExp(headingLevel + ".*", "g");




    while ((match = regexHeading.exec(this._data))  != null) {
      let weekPropName = "";

      if(match.index === 0) {
        continue;
      }

      weekContent = this.breakWeeksIntoActivities(this._data.substring(weekIndex, match.index));

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

  breakWeeksIntoActivities(weekString) {
    let match;
    let activity = {};
    let activityIndex = 0;
    let activityContent = "";
    let activityStart = "";

    while (match = this._activityPattern.exec(weekString)) {
      let activityPropName = "";

      console.log("match index:", match.index, "\nThe match", match[0]);

      activityContent =  weekString.substring(activityIndex, match.index);

      // if(activityIndex === 0) {
      //   activityPropName = "Activity1";
      // } else {
      //   activityPropName = activityStart;
      // }

      activityPropName = match[0];

      activity[activityPropName] = activityContent;

      // ready for the next iteration
      // activityStart = match[0].replace("#", "").split(" ").join("");
      activityIndex = match.index;
    }
    return activity;
  }
}


