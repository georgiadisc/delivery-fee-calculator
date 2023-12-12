import { getDaysStartingFrom, isFriday, weekDay } from "@/utils/dateUtils";

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

describe("getDaysStartingFrom()", () => {
  it("returns days starting from Monday, excluding Sunday", () => {
    const result = getDaysStartingFrom(weekDay.Monday, [weekDay.Sunday]);
    expect(result).toEqual({
      Today: weekDay.Monday,
      Tomorrow: weekDay.Tuesday,
      Wednesday: weekDay.Wednesday,
      Thursday: weekDay.Thursday,
      Friday: weekDay.Friday,
      Saturday: weekDay.Saturday,
      Monday: weekDay.Monday,
    });
  });

  it("returns days starting from Sunday, excluding Sunday", () => {
    const result = getDaysStartingFrom(weekDay.Sunday, [weekDay.Sunday]);
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
    const result = getDaysStartingFrom(weekDay.Sunday, [
      weekDay.Monday,
      weekDay.Sunday,
    ]);
    expect(result).toEqual({
      Tuesday: weekDay.Tuesday,
      Wednesday: weekDay.Wednesday,
      Thursday: weekDay.Thursday,
      Friday: weekDay.Friday,
      Saturday: weekDay.Saturday,
    });
  });

  it("returns days starting from Friday, excluding Sunday and Friday", () => {
    const result = getDaysStartingFrom(weekDay.Friday, [
      weekDay.Sunday,
      weekDay.Friday,
    ]);
    expect(result).toEqual({
      Tomorrow: weekDay.Saturday,
      Monday: weekDay.Monday,
      Tuesday: weekDay.Tuesday,
      Wednesday: weekDay.Wednesday,
      Thursday: weekDay.Thursday,
      Saturday: weekDay.Saturday,
    });
  });
});
