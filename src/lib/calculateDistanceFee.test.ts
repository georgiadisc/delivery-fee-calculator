import { calculateDistanceFee } from "./calculateDistanceFee";

describe("calculateDistanceFee()", () => {
  it("returns base fee for distance within threshold", () => {
    expect(calculateDistanceFee(500)).toBe(2); // Within the threshold
    expect(calculateDistanceFee(1000)).toBe(2); // Exactly at the threshold
  });

  it("calculates additional fee based on distance intervals for distance above threshold", () => {
    expect(calculateDistanceFee(1600)).toBe(4); // 2 (base fee) + 2 (additional fee for 1000 meters)
    expect(calculateDistanceFee(2500)).toBe(5); // 2 (base fee) + 3 (additional fee for 1500 meters)
  });
});
