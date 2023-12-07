import {
  calculateDeliveryFee,
  type DeliveryRequest,
} from "./calculateDeliveryFee";
import { calculateDistanceFee } from "./calculateDistanceFee";
import { calculateItemFee } from "./calculateItemFee";
import { calculateSmallOrderFee } from "./calculateSmallOrderFee";
import { getTimeBasedEvent, type EventDictionary } from "./getTimeBasedEvent";

describe("calculateDeliveryFee()", () => {
  const mockDeliveryRequest: DeliveryRequest = {
    cart: 0,
    distance: 1000,
    items: 5,
    time: new Date("2024-01-03T12:00:00Z"), // Wednesday, 12 PM UTC
  };

  it("returns free delivery fee for cart value equal to the threshold", () => {
    const freeDeliveryRequest = { ...mockDeliveryRequest, cart: 100 };
    expect(calculateDeliveryFee(freeDeliveryRequest).feeToBePaid).toBe(0);
  });

  it("returns free delivery fee for cart value greater than the threshold", () => {
    const freeDeliveryRequest = { ...mockDeliveryRequest, cart: 150 };
    expect(calculateDeliveryFee(freeDeliveryRequest).feeToBePaid).toBe(0);
  });

  it("returns delivery fee for a small cart value", () => {
    const mockEvents: EventDictionary = {
      default: { summary: "Default", rate: 1.0 },
      fridayRush: { summary: "Friday Rush", rate: 1.2 },
    };
    const request = { ...mockDeliveryRequest, cart: 50 };
    const smallOrderFee = calculateSmallOrderFee(request.cart);
    const distanceFee = calculateDistanceFee(request.distance);
    const itemFee = calculateItemFee(request.items);
    const event = getTimeBasedEvent(request.time, mockEvents);
    const baseFee = smallOrderFee + distanceFee + itemFee;
    const ratedFee = baseFee * event.rate;
    expect(calculateDeliveryFee(request).feeToBePaid).toBe(ratedFee);
  });

  it("returns max delivery fee for large orders with surcharges", () => {
    const maxFeeDeliveryRequest: DeliveryRequest = {
      ...mockDeliveryRequest,
      cart: 50,
      distance: 3500,
      items: 20,
    };
    expect(calculateDeliveryFee(maxFeeDeliveryRequest).feeToBePaid).toBe(15);
  });
});
