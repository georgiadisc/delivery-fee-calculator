import {
  getTimeRange,
  getWeekStartingFrom,
  isFriday,
  weekDay,
} from "@/utils/dateUtils";

describe("isFriday()", () => {
  it("returns true for Friday", () => {
    const result = isFriday(weekDay.Friday);
    expect(result).toBe(true);
  });

  it("returns false for non-Friday", () => {
    const result = isFriday(weekDay.Monday);
    expect(result).toBe(false);
  });
});

describe("getWeekStartingFrom()", () => {
  it("returns days starting from Monday, excluding Sunday", () => {
    const result = getWeekStartingFrom({ dayOfWeek: weekDay.Monday });
    expect(result).toEqual({
      Today: weekDay.Monday,
      Tomorrow: weekDay.Tuesday,
      Wednesday: weekDay.Wednesday,
      Thursday: weekDay.Thursday,
      Friday: weekDay.Friday,
      Saturday: weekDay.Saturday,
    });
  });
});

it("returns days starting from Sunday, excluding Sunday", () => {
  const result = getWeekStartingFrom({ dayOfWeek: weekDay.Sunday });
  expect(result).toEqual({
    Tomorrow: weekDay.Monday,
    Tuesday: weekDay.Tuesday,
    Wednesday: weekDay.Wednesday,
    Thursday: weekDay.Thursday,
    Friday: weekDay.Friday,
    Saturday: weekDay.Saturday,
  });
});

it("returns days starting from Sunday, excluding Monday and Sunday", () => {
  const result = getWeekStartingFrom({
    dayOfWeek: weekDay.Sunday,
    excludedDays: [weekDay.Monday, weekDay.Sunday],
  });
  expect(result).toEqual({
    Tuesday: weekDay.Tuesday,
    Wednesday: weekDay.Wednesday,
    Thursday: weekDay.Thursday,
    Friday: weekDay.Friday,
    Saturday: weekDay.Saturday,
  });
});

it("returns days starting from Friday, excluding Sunday and Friday", () => {
  const result = getWeekStartingFrom({
    dayOfWeek: weekDay.Friday,
    excludedDays: [weekDay.Sunday, weekDay.Friday],
  });
  expect(result).toEqual({
    Tomorrow: weekDay.Saturday,
    Monday: weekDay.Monday,
    Tuesday: weekDay.Tuesday,
    Wednesday: weekDay.Wednesday,
    Thursday: weekDay.Thursday,
  });
});

describe("getTimeRange()", () => {
  const mockDate = new Date("2024-01-03T12:00:00Z"); // Wednesday, 12 PM UTC
  jest.useFakeTimers().setSystemTime(mockDate);

  it("returns timestamps with the default interval", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 13, minute: 0 },
    });

    expect(result).toEqual([
      "2024-01-03T12:05:00.000Z",
      "2024-01-03T12:10:00.000Z",
      "2024-01-03T12:15:00.000Z",
      "2024-01-03T12:20:00.000Z",
      "2024-01-03T12:25:00.000Z",
      "2024-01-03T12:30:00.000Z",
      "2024-01-03T12:35:00.000Z",
      "2024-01-03T12:40:00.000Z",
      "2024-01-03T12:45:00.000Z",
      "2024-01-03T12:50:00.000Z",
      "2024-01-03T12:55:00.000Z",
    ]);
  });

  it("returns timestamps with a custom interval", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 13, minute: 0 },
      rangeInterval: 10,
    });

    expect(result).toEqual([
      "2024-01-03T12:10:00.000Z",
      "2024-01-03T12:20:00.000Z",
      "2024-01-03T12:30:00.000Z",
      "2024-01-03T12:40:00.000Z",
      "2024-01-03T12:50:00.000Z",
    ]);
  });

  it("handles startTime and endTime with the same minute", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 12, minute: 0 },
    });

    expect(result).toEqual([]);
  });

  it("handles startTime and endTime with the same hour", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 30 },
      endTime: { hour: 12, minute: 45 },
    });

    expect(result).toEqual([
      "2024-01-03T12:35:00.000Z",
      "2024-01-03T12:40:00.000Z",
    ]);
  });

  it("handles startTime and endTime with different hours and minutes", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 15 },
      endTime: { hour: 13, minute: 45 },
    });

    expect(result).toEqual([
      "2024-01-03T12:20:00.000Z",
      "2024-01-03T12:25:00.000Z",
      "2024-01-03T12:30:00.000Z",
      "2024-01-03T12:35:00.000Z",
      "2024-01-03T12:40:00.000Z",
      "2024-01-03T12:45:00.000Z",
      "2024-01-03T12:50:00.000Z",
      "2024-01-03T12:55:00.000Z",
      "2024-01-03T13:00:00.000Z",
      "2024-01-03T13:05:00.000Z",
      "2024-01-03T13:10:00.000Z",
      "2024-01-03T13:15:00.000Z",
      "2024-01-03T13:20:00.000Z",
      "2024-01-03T13:25:00.000Z",
      "2024-01-03T13:30:00.000Z",
      "2024-01-03T13:35:00.000Z",
      "2024-01-03T13:40:00.000Z",
    ]);
  });
});
