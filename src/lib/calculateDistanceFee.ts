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
 * the distance would be shorter than 500 meters, the minimum fee is always 1€.
 */
export function calculateDistanceFee(distance: number): number {
  const additionalDistance = Math.ceil(
    Math.max(distance - distanceThreshold, 0) / distanceFeeInterval
  );
  const additionalDistanceFee = additionalDistance * additionalDistanceFeeRate;
  return baseDistanceFee + additionalDistanceFee;
}
