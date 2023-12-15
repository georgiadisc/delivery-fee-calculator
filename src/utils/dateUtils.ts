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

/** Checks if the given day corresponds to Friday. */
export function isFriday(day: number): boolean {
  return day === weekDay.Friday;
}

/**
 * Returns a record of days starting from the given day and extending until the
 * length of the week, excluding specified days.
 *
 * @param day - The numeric representation of the starting day.
 * @param excludedDays - An array of numeric representations of days to be
 * excluded (default is Sunday).
 */
export function getWeekStartingFrom(
  day: number,
  excludedDays: number[] = [weekDay.Sunday]
): Record<string, number> {
  const weekDays = Object.keys(weekDay);
  const week: Record<string, number> = {};

  for (let i = 0; i < weekDays.length; i++) {
    const currentDay = (day + i) % 7;

    // Skip excluded days
    if (excludedDays.includes(currentDay)) continue;

    // Determine the key for the current day
    let currentDayKey: string;
    if (i === 0) {
      currentDayKey = "Today";
    } else if (i === 1) {
      currentDayKey = "Tomorrow";
    } else {
      currentDayKey = weekDays[currentDay];
    }
    week[currentDayKey] = currentDay;
  }

  return week;
}

type TimeRangeOptions = {
  /** The starting hour of the time range. */
  startHour?: number;
  /** The ending hour of the time range. */
  endHour: number;
  /** The interval between time entries in minutes. */
  rangeInterval: number;
};

/**
 * Returns a time range with the specified parameters. A record where keys are
 * formatted time strings (in "short" time style) and values are ISO 8601
 * formatted timestamps.
 *
 * @param startHour - The starting hour of the time range (optional, defaults
 * to the current hour).
 * @param endHour - The ending hour of the time range.
 * @param rangeInterval - The interval between time entries in minutes
 * (defaults to 5 minutes).
 */
export function getTimeRange({
  startHour,
  endHour,
  rangeInterval,
}: TimeRangeOptions): Record<string, string> {
  const millisecondsPerMinute = 60000;

  const timestamps: Record<string, string> = {};
  const currentTime = new Date();

  currentTime.setHours(
    startHour ?? currentTime.getHours(),
    currentTime.getMinutes(),
    0,
    0
  );

  const endTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    endHour,
    0,
    0
  );

  const formatTime = (date: Date): string =>
    new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(date);

  const remainder = currentTime.getMinutes() % rangeInterval;
  currentTime.setMinutes(
    currentTime.getMinutes() + (rangeInterval - remainder)
  );

  while (currentTime < endTime) {
    const formattedTime = formatTime(currentTime);
    timestamps[formattedTime] = currentTime.toISOString();

    currentTime.setTime(
      currentTime.getTime() + rangeInterval * millisecondsPerMinute
    );
  }

  return timestamps;
}
