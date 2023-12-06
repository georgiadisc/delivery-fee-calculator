import { calculateSmallOrderFee } from "./calculateSmallOrderFee";

describe("calculateSmallOrderFee()", () => {
  it("returns non-zero fee for small order amount", () => {
    expect(calculateSmallOrderFee(8.9)).toBeCloseTo(1.1); // (10 - 8.9) = 1.1
  });

  it("returns zero fee for order amount exactly equal to the threshold", () => {
    expect(calculateSmallOrderFee(10)).toBe(0);
  });

  it("returns zero fee for order amount above the threshold", () => {
    expect(calculateSmallOrderFee(31.8)).toBe(0);
  });
});
