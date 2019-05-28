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
    this.buildContent();
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
  buildContent(heading) {
    let match;
    let contentObj = {};


    let headingLevel = !heading ? "#" : heading;
    let fileArray = this._data.split("\n");
    let i =0;
    let currentTopLevel = {}; 
    let currentActivity = {};
    
    let headingRegex = RegExp(`^${headingLevel} .*`, "g");
    let exerciseRegex = RegExp("^## Exercise.*", "g");
    let resourceRegex = RegExp("^## Resource.*", "g");

    
    // console.log(fileArray);
    
    while(i < fileArray.length) {

      // Top Level heading
      if(headingRegex.test(fileArray[i])) {
        
        currentTopLevel = fileArray[i].replace("#", "").split(" ").join("");
        console.log("* " + currentTopLevel + " *");

        // Initialize heading
        contentObj[currentTopLevel] = {};
        contentObj[currentTopLevel]["content"] = fileArray[i];
      } 

      // Test and Set Activity Heading
      // Todo: What if Exercise initialized w/o heading
      else if (exerciseRegex.test(fileArray[i]) || resourceRegex.test(fileArray[i])) {
        console.log("Hi there Activity!!!");

        currentActivity = fileArray[i].replace("##", "").split(" ").join("");
        contentObj[currentTopLevel][currentActivity] = (fileArray[i] + "\n");
      }

      // Test/Set Exercise Ending
      // Reset Current Activity
      else if (fileArray[i] === "---" && Object.keys(currentActivity).length > 0 ) {
        currentActivity = {};
      } 

      // Test/Set Current Activity is active
      // Add Activity Content
      else if (Object.keys(currentActivity).length > 0) {
        console.log("----> " + fileArray[i]);

        contentObj[currentTopLevel][currentActivity] += (fileArray[i] + "\n");
      }
      else {
        contentObj[currentTopLevel]["content"] += (fileArray[i] + "\n");
        console.log("->" + fileArray[i]);
      }
      
      i++;
    }
    return this._weekContent = contentObj;
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

