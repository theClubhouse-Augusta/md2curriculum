import Week from './ProcessWeek/WeekBuilder';
import Convert from "./json-converter/convert";

export default function Analyze (data, type) {

  if(type === "Markdown") {
    Convert(data);
    console.log("trying Markdown");
    return this;
  }

  // Build out Weeks with week count/names
  let week = new Week(data);

  // this.WeekNames = week.weekNames;
  // this.WeekCount = week.weekCount;
  this.WeekContent = week.weekContent;

  return this;
}






