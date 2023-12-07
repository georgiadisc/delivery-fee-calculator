/** */
const weekDay = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
} as const;
/** */
const fridayRushStartHour = 15;
/** */
const fridayRushEndHour = 19;

function isFriday(day: number): boolean {
  return day === weekDay.Friday;
}

function isWithinRushHours(hours: number): boolean {
  return hours >= fridayRushStartHour && hours < fridayRushEndHour;
}

/** */
export function isFridayRush(date: Date): boolean {
  return isFriday(date.getUTCDay()) && isWithinRushHours(date.getUTCHours());
}
