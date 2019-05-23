import Week from './ProcessWeek/WeekBuilder';
export default function Analyze (data, type) {

  let week = new Week(data);

  this.WeekNames = week.weekNames;
  this.WeekCount = week.weekCount;

  

  return this;
}






