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

  it("", () => {
    const result = getTimeRange({
      startTime: { hour: 12, minute: 0 },
      endTime: { hour: 13, minute: 0 },
    });
    expect(result).toMatchObject([
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
});
