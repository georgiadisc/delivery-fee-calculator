/** The value for each day of the week, based on the en-US locale. */
const weekDay = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
} as const;

/** The starting hour for Friday rush hours. */
const fridayRushStartHour = 15;

/** The ending hour for Friday rush hours. */
const fridayRushEndHour = 19;

/** Checks if the given day corresponds to Friday. */
function isFriday(day: number): boolean {
  return day === weekDay.Friday;
}

/** Checks if the given hours are within the defined Friday rush hours. */
function isWithinRushHours(hours: number): boolean {
  return hours >= fridayRushStartHour && hours < fridayRushEndHour;
}

/** Checks if the given date and time fall within the defined Friday rush hours. */
export function isFridayRush(date: Date): boolean {
  return isFriday(date.getUTCDay()) && isWithinRushHours(date.getUTCHours());
}
