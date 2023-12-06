/** */
const distanceThreshold = 1000;
/** */
const distanceFeeInterval = 500;
/** */
const baseDistanceFee = 2.0;
/** */
const additionalDistanceFeeRate = 1.0;

/** */
export function calculateDistanceFee(distance: number): number {
  const additionalDistance = Math.ceil(
    Math.max(distance - distanceThreshold, 0) / distanceFeeInterval
  );
  const additionalDistanceFee = additionalDistance * additionalDistanceFeeRate;
  return baseDistanceFee + additionalDistanceFee;
}
