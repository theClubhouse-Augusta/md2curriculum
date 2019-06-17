



export default class Week {
  constructor(data) {
    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._headingPattern = /(# Week.*)/g;
    this._activityPattern = /(## Resource.*)|(## Exercise.*)|(## Quiz.*)/g;
    this._activityStopPattern = /---/g;
    this._contentObj = {};
  }

  get weekCount() {
    this.addWeekCount();
    return this._weekCount;
  }
  get weekNames() {
    this.addWeekNames();
    return this._weekNames;
  }
  get content() {
    this.buildContent(this._headingPattern, this._activityPattern, this._activityStopPattern);
    return this._weekContent;
  }

  addWeekCount() {
    let weekCounter = 0;
    let match;

    while ((match = this._weekPattern.exec(this._data))) {
      weekCounter++;
    }

    return (this._weekCount = weekCounter);
  }

  addWeekNames() {
    let weekNames = [];
    let match;

    while ((match = this._weekPattern.exec(this._data))) {
      weekNames.push(match[0]);
    }

    return (this._weekNames = weekNames);
  }



/* Content Builder stuff */

  checkHeading(line, headingPattern) {
    if(headingPattern.test(line)) {
      return line;
    }
    return false;
  }

  checkActivityHeading(line, activityPattern) {
    if(activityPattern.test(line)) {
      return line;
    }
    return false;
  }

  
  checkActivityStop(line, activityStopPattern) {
    if(activityStopPattern.test(line)) {
      return line;
    }
    return false;
  }

  createPropName(line) {
    return line.replace(/^#+/g, "")
    .split(" ")
    .join("");
  }

  addActivityContent(line) {
    return  line + "\n";
  }

  addDefaultContent(line, activityStop) {
    return !activityStop ? (line + "\n") : "";
  }

  buildContent (headingPattern, activityPattern, activityStopPattern) {
  
    let activeHeading = false,
      activeActivity = false,
      activityStop = false;
  
    // Break file string into array
    let fileArray = this._data.split("\n");
  
    return this._weekContent = fileArray.reduce((accumulator, line, index) => {
      
        // Check if is Heading declaration
          // If so set active heading
        if(this.checkHeading(line, headingPattern)) {
          activeHeading = this.createPropName(line);
          accumulator[activeHeading] = {};
          accumulator[activeHeading]["content"] = "";
        }

        // Check if activity heading, and set active Activity
        if(this.checkActivityHeading(line, activityPattern)) {

          activeActivity = this.createPropName(line);
          
          accumulator[activeHeading][activeActivity] = 
          accumulator[activeHeading].hasOwnProperty(activeActivity) ? 
          accumulator[activeHeading][activeActivity] :  "";          
        } 

        // Check is Activity stop
          // If so unset active activity
        if(this.checkActivityStop(line, activityStopPattern)) {
          activeActivity = false;
          activityStop = true;
        }
 
        // Check  is an active activity and active heading
          // If so set default content
        if(activeHeading && !activeActivity) {
          accumulator[activeHeading]["content"] += this.addDefaultContent(line, activityStop);
        }
        
        // Check  is an active activity and active heading
        // If so set Activity content
        if (activeHeading && activeActivity) {
          accumulator[activeHeading][activeActivity] += this.addActivityContent(line);
        }
        
        // reset Activity Stop
        if(!activeActivity && activityStop) {
          activityStop = false;
        }

      return accumulator;
    }, {}); 
  }
}

