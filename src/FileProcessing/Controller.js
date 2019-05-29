import Week from './ProcContent/WeekBuilder';

export default function Controller (data, type) {
  // Build out Weeks with week count/names
  let week = new Week(data);

  // this.WeekNames = week.weekNames;
  // this.WeekCount = week.weekCount;
  this.content = week.content;

  return this;
}






