/** The value for each day of the week, based on the en-US locale. */
export const weekDay = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
} as const;

const excludeSunday = [weekDay.Sunday];

/** Checks if the given day corresponds to Friday. */
export function isFriday(day: number): boolean {
  return day === weekDay.Friday;
}

/**
 * Returns a record of days starting from the specified day, excluding
 * specified days. The record includes the starting day and extends until the
 * total number of days, calculated based on the length of the week and the
 * excluded days.
 * @param day - The numeric representation of the starting day.
 * @param excludedDays - An array of numeric representations of days to be
 * excluded (default is Sunday).
 */
export function getDaysStartingFrom(
  day: number,
  excludedDays: number[] = excludeSunday
): Record<string, number> {
  const weekDays = Object.keys(weekDay);
  const days: Record<string, number> = {};
  const totalDays = weekDays.length + excludedDays.length;

  // Constants representing the first and second day in the iteration
  const firstDay = 0;
  const secondDay = 1;

  for (let i = 0; i < totalDays; i++) {
    const currentDay = (day + i) % 7;

    // Skip excluded days
    if (excludedDays.includes(currentDay)) continue;

    // Determine the key for the current day
    let dayKey: string;
    if (i === firstDay) {
      dayKey = "Today";
    } else if (i === secondDay) {
      dayKey = "Tomorrow";
    } else {
      dayKey = weekDays[currentDay];
    }

    days[dayKey] = currentDay;
  }

  return days;
}
