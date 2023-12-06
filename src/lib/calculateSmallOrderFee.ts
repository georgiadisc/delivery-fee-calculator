/** */
const smallOrderSurchargeThreshold = 10.0;

/** */
export function calculateSmallOrderFee(cart: number): number {
  return Math.max(smallOrderSurchargeThreshold - cart, 0);
}
