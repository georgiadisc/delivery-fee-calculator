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

/** */
export function isFridayRush(date: Date): boolean {
  const isFriday = date.getUTCDay() === weekDay.Friday;
  const isWithinRushHours =
    date.getUTCHours() >= fridayRushStartHour &&
    date.getUTCHours() < fridayRushEndHour;
  return isFriday && isWithinRushHours;
}
