import { calculateDistanceFee } from "./calculateDistanceFee";
import { calculateItemFee } from "./calculateItemFee";
import { calculateSmallOrderFee } from "./calculateSmallOrderFee";
import { getTimeBasedEvent, type TimeBasedEvent } from "./getTimeBasedEvent";

/** The threshold for cart value above which the delivery fee is waived. */
const cartThreshold = 100.0;
/** The delivery fee when the cart value is more than a 100€. */
const noDeliveryFee = 0.0;
/** The maximum allowable delivery fee, including possible surcharges. */
const maxDeliveryFee = 15.0;

export type DeliveryRequest = {
  /** The total value of items in the shopping cart. */
  cart: number;
  /** The distance of the delivery. */
  distance: number;
  /** The number of items in the cart. */
  items: number;
  /** The date and time of the order. */
  time: Date;
};

export type DeliveryResponse = {
  /** The fee associated with small orders. */
  smallOrderFee: number;
  /** The fee associated with the delivery distance. */
  distanceFee: number;
  /** The fee associated with the number of items in the cart. */
  itemFee: number;
  /** The time-based event affecting the delivery fee. */
  event: TimeBasedEvent;
  /** The total delivery fee, considering all factors and surcharges. */
  totalFee: number;
  /** The final fee to be paid, accounting for any waivers or maximum limits. */
  feeToBePaid: number;
};

/**
 * Calculates the delivery fee based on the rules and surcharges specified by
 * Wolt.
 * @param cart - The total value of items in the shopping cart.
 * @param distance - The distance of the delivery.
 * @param items - The number of items in the cart.
 * @param time - The date and time of the order.
 */
export function calculateDeliveryFee({
  cart,
  distance,
  items,
  time,
}: DeliveryRequest): DeliveryResponse {
  // Calculate fees for different components of the delivery.
  const smallOrderFee = calculateSmallOrderFee(cart);
  const distanceFee = calculateDistanceFee(distance);
  const itemFee = calculateItemFee(items);
  const baseFee = smallOrderFee + distanceFee + itemFee;

  // Determine the time-based event that applies to the order.
  const event = getTimeBasedEvent(time);
  const totalFee = baseFee * event.rate;

  // Ensure that the total fee does not exceed the maximum allowable fee.
  const cappedFee = Math.min(totalFee, maxDeliveryFee);

  // Waive the delivery fee if the cart value exceeds the specified threshold.
  const feeToBePaid = cart >= cartThreshold ? noDeliveryFee : cappedFee;

  return { smallOrderFee, distanceFee, itemFee, event, totalFee, feeToBePaid };
}
