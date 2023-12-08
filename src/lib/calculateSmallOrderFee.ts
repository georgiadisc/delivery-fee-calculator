/** Orders below this threshold will incur a small order surcharge. */
const smallOrderSurchargeThreshold = 10.0;

/**
 * If the cart value is less than 10€, a small order surcharge is added to the
 * delivery price. The surcharge is the difference between the cart value and
 * 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
 * @param cart - The total value of the items in the cart.
 */
export function calculateSmallOrderFee(cart: number): number {
  return Math.max(smallOrderSurchargeThreshold - cart, 0);
}
