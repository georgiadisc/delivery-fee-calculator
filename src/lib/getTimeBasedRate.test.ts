import { getTimeBasedRate } from "./getTimeBasedRate";

describe.skip("getTimeBasedRate()", () => {
  it("returns default rate for a non-Friday and non-rush hour time", () => {
    const nonRushDate = new Date("2023-01-03T12:00:00Z"); // Tuesday, 12 PM UTC
    expect(getTimeBasedRate(nonRushDate)).toBe(1);
  });

  it("returns Friday rush rate for a Friday during rush hours", () => {
    const rushFridayDate = new Date("2023-01-06T16:00:00Z"); // Friday, 4 PM UTC
    expect(getTimeBasedRate(rushFridayDate)).toBe(1.2);
  });
});
