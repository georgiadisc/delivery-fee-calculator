import { getTimeBasedEvent, type EventDictionary } from "./getTimeBasedEvent";

describe("getTimeBasedEvent()", () => {
  const mockEvents: EventDictionary = {
    default: { summary: "Default", rate: 1.0 },
    fridayRush: { summary: "Friday Rush", rate: 1.2 },
  };

  it("returns default event for a non-Friday and non-rush hour time", () => {
    const nonRushDate = new Date("2023-01-03T12:00:00Z"); // Tuesday, 12 PM UTC
    expect(getTimeBasedEvent(nonRushDate, mockEvents)).toBe(mockEvents.default);
  });

  it("returns Friday rush event for a Friday during rush hours", () => {
    const rushFridayDate = new Date("2023-01-06T16:00:00Z"); // Friday, 4 PM UTC
    expect(getTimeBasedEvent(rushFridayDate, mockEvents)).toBe(
      mockEvents.fridayRush
    );
  });

  it("returns default event when Friday rush event is disabled", () => {
    const rushFridayDate = new Date("2023-01-06T16:00:00Z"); // Friday, 4 PM UTC
    const disabledEvents = {
      ...mockEvents,
      fridayRush: { ...mockEvents.fridayRush, isDisabled: true },
    };
    expect(getTimeBasedEvent(rushFridayDate, disabledEvents)).toEqual(
      mockEvents.default
    );
  });

  it("returns default event for a disabled Friday rush event on any day", () => {
    const disabledEvents = {
      ...mockEvents,
      fridayRush: { ...mockEvents.fridayRush, isDisabled: true },
    };
    const anyDate = new Date("2023-01-03T12:00:00Z"); // Tuesday, 12 PM UTC
    expect(getTimeBasedEvent(anyDate, disabledEvents)).toEqual(
      mockEvents.default
    );
  });
});
