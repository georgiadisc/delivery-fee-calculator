import { calculateItemFee } from "./calculateItemFee";

describe("calculateItemFee()", () => {
  it("returns 0 for 4 or fewer items", () => {
    expect(calculateItemFee(4)).toBe(0);
    expect(calculateItemFee(3)).toBe(0);
    expect(calculateItemFee(1)).toBe(0);
  });

  it("calculates fee based on itemSurchargeRate for items between maxFreeItems and bulkSurchargeItemThreshold", () => {
    expect(calculateItemFee(5)).toBeCloseTo(0.5); // (5 - 4) * 0.5 = 0.5
    expect(calculateItemFee(8)).toBe(2); // (8 - 4) * 0.5 = 2
    expect(calculateItemFee(12)).toBe(4); // (12 - 4) * 0.5 = 4
  });

  it("includes bulkFee for items above bulkSurchargeItemThreshold", () => {
    expect(calculateItemFee(13)).toBeCloseTo(5.7); // (13 - 4) * 0.5 + 1.2 = 5.7
    expect(calculateItemFee(20)).toBeCloseTo(9.2); // (20 - 4) * 0.5 + 1.2 = 9.2
  });
});
