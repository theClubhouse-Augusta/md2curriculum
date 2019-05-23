export default class Week {
    constructor (data) {
        this._data = data;
        this._weekNames = [];
        this._weekCount = 0;

        this._rePatterns = {
            "week": /(Week.*)/g,
          }

          this.week = {};

          this.addWeekCount();
          this.addWeekNames();
        }

    // set Week(week) { this.Week = week }
    get weekCount () { return this._weekCount; }
    get weekNames () { return this._weekNames; }

    addWeekNames () {
        let weekNames = [];
        let match;
        
        while (match = this._rePatterns.week.exec(this._data)) {
            weekNames.push(match[0]);
        }
        
        return this._weekNames = weekNames;
    } 
        
        
        
    addWeekCount () {
        let weekCounter =  0;
        let match;
        
        while (match = this._rePatterns.week.exec(this._data)) {
            weekCounter ++;
            // console.log("Found", match[0], "at", match.index);
        }
        
        return this._weekCount = weekCounter;
    }


}


