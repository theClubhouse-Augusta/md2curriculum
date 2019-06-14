



export default class Week {
  constructor(data) {
    this._data = data;
    this._weekNames = [];
    this._weekCount = 0;
    this._weekPattern = /(# Week.*)/g;
    this._activityPattern = /(## Resource.*)|(## Exercise.*)/g;
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
    this.buildContent(this._weekPattern, this._activityPattern, /---/g);
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




/*
  // Recursive func that takes a pattern (heading level) and tests it against headings/subheadings
  buildContent(heading) {
    // Base Object where all content resides
    let contentObj = {},
      currentTopLevel = {},
      currentActivity = {};
    let i = 0;

    // TODO:
    // Make function recursively called to break object into more controllable chunks
    let headingLevel = !heading ? "#" : heading;

    // Break file string into array
    let fileArray = this._data.split("\n");

    // Regex Tests for sections
    let headingRegex = RegExp(`^${headingLevel} .*`, "g");
    let exerciseRegex = RegExp("^## Exercise.*", "g");
    let resourceRegex = RegExp("^## Resource.*", "g");

    while (i < fileArray.length) {
      // Top Level heading
      if (headingRegex.test(fileArray[i])) {
        currentTopLevel = fileArray[i]
          .replace("#", "")
          .split(" ")
          .join("");

        // Initialize heading
        contentObj[currentTopLevel] = {};
        contentObj[currentTopLevel]["content"] = fileArray[i];
      }

      // Test and Set Activity Heading
      // Todo: What if Exercise initialized w/o heading
      else if (
        exerciseRegex.test(fileArray[i]) ||
        resourceRegex.test(fileArray[i])
      ) {
        currentActivity = fileArray[i]
          .replace("##", "")
          .split(" ")
          .join("");
        contentObj[currentTopLevel][currentActivity] = fileArray[i] + "\n";
      }

      // Test if there is an active Exercise and the line has an ending
      // Reset Current Activity
      else if (
        fileArray[i] === "---" &&
        Object.keys(currentActivity).length > 0
      ) {
        currentActivity = {};
      }

      // Test/Set Current Activity is active
      // Add Activity Content
      else if (Object.keys(currentActivity).length > 0) {
        contentObj[currentTopLevel][currentActivity] += fileArray[i] + "\n";
      } else {
        contentObj[currentTopLevel]["content"] += fileArray[i] + "\n";
      }

      i++;
    }
    return (this._weekContent = contentObj);
  } */




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

  buildContent (headingPattern, activityPattern, activityStopPattern) {
  
    let activeHeading = false,
      activeActivity = false;
  
    // Break file string into array
    let fileArray = this._data.split("\n");
  
    let content = fileArray.reduce((accumulator, line, index) => {

        // Check if is Heading declaration
          // If so set active heading
        if(this.checkHeading(line, headingPattern)) {
          activeHeading = this.createPropName(line);
          accumulator[activeHeading] = {};
          accumulator[activeHeading]["content"] = "";
        }

        // Check is an Activity Heading
          // If so set active activity
        if(this.checkActivityHeading(line, activityPattern)) {
          activeActivity = this.createPropName(line);
          accumulator[activeHeading][activeActivity] = "";
        }

        // Check is Activity stop
          // If so unset active activity
        if(this.checkActivityStop(line, activityStopPattern)) {
          activeActivity = false;
        }
 
        // Check  is an active activity and active heading
          // If so set default content
        if(activeHeading && !activeActivity) {
          accumulator[activeHeading]["content"] += (line + "\n");
        } 
        
        // Check  is an active activity and active heading
          // If so set Activity content
        if (activeHeading && activeActivity) {
          accumulator[activeHeading][activeActivity] += (line + "\n");
        }

      return accumulator;
    }, {}); 

    return this._weekContent = content;
  }
}

