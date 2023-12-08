/** The distance threshold beyond which additional fees apply. */
const distanceThreshold = 1000;
/** The interval for calculating additional distance fees. */
const distanceFeeInterval = 500;
/** The base fee for distances within the threshold. */
const baseDistanceFee = 2.0;
/**
 * The rate at which additional fees are applied for each interval beyond the
 * threshold.
 */
const additionalDistanceFeeRate = 1.0;

/**
 * A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery
 * distance is longer than that, 1€ is added for every additional 500 meters
 * that the courier needs to travel before reaching the destination. Even if
 * the distance would be shorter than 500 meters, the minimum fee is always 1€
 * * Example 1: If the delivery distance is 1499 meters, the delivery fee is:
 * 2€ base fee + 1€ for the additional 500 m => 3€
 * * Example 2: If the delivery distance is 1500 meters, the delivery fee is:
 * 2€ base fee + 1€ for the additional 500 m => 3€
 * * Example 3: If the delivery distance is 1501 meters, the delivery fee is:
 * 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
 */
export function calculateDistanceFee(distance: number): number {
  const additionalDistance = Math.ceil(
    Math.max(distance - distanceThreshold, 0) / distanceFeeInterval
  );
  const additionalDistanceFee = additionalDistance * additionalDistanceFeeRate;
  return baseDistanceFee + additionalDistanceFee;
}
