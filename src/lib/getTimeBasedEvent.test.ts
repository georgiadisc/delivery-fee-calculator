import { events, getTimeBasedEvent } from "./getTimeBasedEvent";

describe("getTimeBasedEvent()", () => {
  it("returns default event for a non-Friday and non-rush hour time", () => {
    const nonRushDate = new Date("2023-01-03T12:00:00Z"); // Tuesday, 12 PM UTC
    expect(getTimeBasedEvent(nonRushDate)).toBe(events.default);
  });

  it("returns Friday rush event for a Friday during rush hours", () => {
    const rushFridayDate = new Date("2023-01-06T16:00:00Z"); // Friday, 4 PM UTC
    expect(getTimeBasedEvent(rushFridayDate)).toBe(events.fridayRush);
  });
});
