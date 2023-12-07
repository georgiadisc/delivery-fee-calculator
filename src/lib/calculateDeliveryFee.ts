import { calculateDistanceFee } from "./calculateDistanceFee";
import { calculateItemFee } from "./calculateItemFee";
import { calculateSmallOrderFee } from "./calculateSmallOrderFee";
import { getTimeBasedEvent, type TimeBasedEvent } from "./getTimeBasedEvent";

/** */
const cartThreshold = 100.0;
/** */
const noDeliveryFee = 0.0;
/** */
const maxDeliveryFee = 15.0;

export type DeliveryRequest = Readonly<{
  /** */
  cart: number;
  /** */
  distance: number;
  /** */
  items: number;
  /** */
  time: Date;
}>;

export type DeliveryResponse = Readonly<{
  /** */
  smallOrderFee: number;
  /** */
  distanceFee: number;
  /** */
  itemFee: number;
  /** */
  event: TimeBasedEvent;
  /** */
  totalFee: number;
  /** */
  feeToBePaid: number;
}>;

/** */
export function calculateDeliveryFee({
  cart,
  distance,
  items,
  time,
}: DeliveryRequest): DeliveryResponse {
  //
  const smallOrderFee = calculateSmallOrderFee(cart);
  const distanceFee = calculateDistanceFee(distance);
  const itemFee = calculateItemFee(items);
  const baseFee = smallOrderFee + distanceFee + itemFee;
  //
  const event = getTimeBasedEvent(time);
  const ratedFee = baseFee * event.rate;
  // The delivery fee can never be more than 15€, including possible surcharges.
  const totalFee = Math.min(ratedFee, maxDeliveryFee);
  // The delivery is free (0€) when the cart value is equal or more than 100€.
  const feeToBePaid = cart >= cartThreshold ? noDeliveryFee : totalFee;
  return { smallOrderFee, distanceFee, itemFee, event, totalFee, feeToBePaid };
}
