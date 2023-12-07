import { calculateDeliveryFeeImpl } from "./calculateDeliveryFeeImpl";
import { calculateDistanceFee } from "./calculateDistanceFee";
import { calculateItemFee } from "./calculateItemFee";
import { calculateSmallOrderFee } from "./calculateSmallOrderFee";
import { getTimeBasedRate } from "./getTimeBasedRate";

describe.skip("calculateDeliveryFeeImpl()", () => {
  const mockDeliveryRequest = {
    cart: 0,
    distance: 1000,
    items: 5,
    time: new Date("2024-01-03T12:00:00Z"), // Wednesday, 12 PM UTC
  } as const;

  it("returns 0 for cart value equal to the threshold", () => {
    const request = { ...mockDeliveryRequest, cart: 100 };
    expect(calculateDeliveryFeeImpl(request)).toBe(0);
  });

  it("returns 0 for cart value greater than the threshold", () => {
    const request = { ...mockDeliveryRequest, cart: 150 };
    expect(calculateDeliveryFeeImpl(request)).toBe(0);
  });

  it("returns delivery fee for a small cart value", () => {
    const request = { ...mockDeliveryRequest, cart: 50 };
    let expectedFee = calculateSmallOrderFee(request.cart);
    expectedFee += calculateDistanceFee(request.distance);
    expectedFee += calculateItemFee(request.items);
    expectedFee *= getTimeBasedRate(request.time);
    expect(calculateDeliveryFeeImpl(request)).toBe(expectedFee);
  });

  it("returns max delivery fee for large orders with surcharges", () => {
    const request = {
      ...mockDeliveryRequest,
      cart: 50,
      distance: 3500,
      items: 20,
    };
    expect(calculateDeliveryFeeImpl(request)).toBe(15);
  });
});
