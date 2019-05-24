import Week from './ProcessWeek/WeekBuilder';
export default function Analyze (data, type) {

  // Build out Weeks with week count/names
  let week = new Week(data);

  this.WeekNames = week.weekNames;
  this.WeekCount = week.weekCount;
  this.WeekContent = week.weekContent;

  return this;
}






