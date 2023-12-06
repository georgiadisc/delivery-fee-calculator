import { isFridayRush } from "./isFridayRush";

describe("isFridayRush()", () => {
  it("returns false for a non-Friday date", () => {
    const nonFridayDate = new Date("2024-01-03T12:00:00Z"); // Wednesday, 12 PM UTC
    expect(isFridayRush(nonFridayDate)).toBe(false);
  });

  it("returns false for a Friday but not during rush hours", () => {
    const nonRushFridayDate = new Date("2024-01-05T10:00:00Z"); // Friday, 10 AM UTC
    expect(isFridayRush(nonRushFridayDate)).toBe(false);
  });

  it("returns true for a Friday during rush hours", () => {
    const rushFridayDate = new Date("2024-01-05T16:00:00Z"); // Friday, 4 PM UTC
    expect(isFridayRush(rushFridayDate)).toBe(true);
  });

  it("returns false for a non-Friday during rush hours", () => {
    const nonFridayRushDate = new Date("2024-01-03T18:00:00Z"); // Wednesday, 6 PM UTC
    expect(isFridayRush(nonFridayRushDate)).toBe(false);
  });

  it("returns true for a Friday at the start of rush hours", () => {
    const startOfRushFridayDate = new Date("2024-01-05T15:00:00Z"); // Friday, 3 PM UTC
    expect(isFridayRush(startOfRushFridayDate)).toBe(true);
  });

  it("returns false for a Friday at the end of rush hours", () => {
    const endOfRushFridayDate = new Date("2024-01-05T19:00:00Z"); // Friday, 7 PM UTC
    expect(isFridayRush(endOfRushFridayDate)).toBe(false);
  });
});
