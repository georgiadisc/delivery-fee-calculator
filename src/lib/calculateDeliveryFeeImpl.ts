import { calculateDistanceFee } from "./calculateDistanceFee";
import { calculateItemFee } from "./calculateItemFee";
import { calculateSmallOrderFee } from "./calculateSmallOrderFee";
import { getTimeBasedRate } from "./getTimeBasedRate";

/** */
const cartThreshold = 100.0;
/** */
const noDeliveryFee = 0;
/** */
const maxDeliveryFee = 15.0;

/** */
type DeliveryRequest = {
  cart: number;
  distance: number;
  items: number;
  time: Date;
};

/** */
export function calculateDeliveryFeeImpl({
  cart,
  distance,
  items,
  time,
}: DeliveryRequest): number {
  let deliveryFee = 0;
  // The delivery is free (0€) when the cart value is equal or more than 100€.
  if (cart >= cartThreshold) {
    return noDeliveryFee;
  }
  deliveryFee += calculateSmallOrderFee(cart);
  deliveryFee += calculateDistanceFee(distance);
  deliveryFee += calculateItemFee(items);
  deliveryFee *= getTimeBasedRate(time);
  // The delivery fee can never be more than 15€, including possible surcharges.
  return Math.min(deliveryFee, maxDeliveryFee);
}
