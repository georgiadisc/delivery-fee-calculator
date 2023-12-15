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

/** The number of milliseconds per minute. */
const millisecondsPerMinute = 60000;

/** Checks if the given day corresponds to Friday. */
export function isFriday(day: number): boolean {
  return day === weekDay.Friday;
}

type WeekOptions = {
  /** The numeric representation of the starting week day. */
  dayOfWeek: number;
  /** An array of week days to be excluded. */
  excludedDays?: number[];
};

/**
 * Returns a record of days starting from the given day and extending until the
 * length of the week, excluding specified days.
 * @param dayOfWeek - The numeric representation of the starting week day.
 * @param excludedDays - An array of week days to be excluded (default is
 * Sunday).
 */
export function getWeekStartingFrom({
  dayOfWeek,
  excludedDays = [weekDay.Sunday],
}: WeekOptions): Record<string, number> {
  const weekDays = Object.keys(weekDay);
  const week: Record<string, number> = {};

  for (let i = 0; i < weekDays.length; i++) {
    const currentDay = (dayOfWeek + i) % 7;

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
  /** Start time of the range. */
  startTime: { hour: number; minute: number };
  /** End time of the range. */
  endTime: { hour: number; minute: number };
  /** The interval between time entries in minutes. */
  rangeInterval?: number;
};

/**
 * Returns an array of timestamps within the specified time range. Timestamps
 * are ISO 8601 formatted strings.
 * @param startTime - The starting time of the time range.
 * @param endTime - The ending time of the time range.
 * @param rangeInterval - The interval between time entries in minutes
 * (defaults to 5 minutes).
 */
export function getTimeRange({
  startTime,
  endTime,
  rangeInterval = 5,
}: TimeRangeOptions): string[] {
  const timestamps: string[] = [];

  const currentTime = new Date();
  currentTime.setUTCHours(startTime.hour, startTime.minute, 0, 0);

  const endDate = new Date(currentTime);
  endDate.setUTCHours(endTime.hour, endTime.minute, 0, 0);

  const remainder = currentTime.getMinutes() % rangeInterval;
  currentTime.setMinutes(
    currentTime.getMinutes() + (rangeInterval - remainder)
  );

  while (currentTime < endDate) {
    timestamps.push(currentTime.toISOString());
    currentTime.setTime(
      currentTime.getTime() + rangeInterval * millisecondsPerMinute
    );
  }

  return timestamps;
}
