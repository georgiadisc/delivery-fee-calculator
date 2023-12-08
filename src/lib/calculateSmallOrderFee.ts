/** Orders below this threshold will incur a small order surcharge. */
const smallOrderSurchargeThreshold = 10.0;

/**
 * If the cart value is less than the specified threshold, a small order
 * surcharge is added to the delivery price. The surcharge is the difference
 * between the cart value and {@link smallOrderSurchargeThreshold}. For example
 * if the cart value is 8.90€ and the specified threshold is 10€, the
 * surcharge will be 1.10€.
 */
export function calculateSmallOrderFee(cart: number): number {
  return Math.max(smallOrderSurchargeThreshold - cart, 0);
}
