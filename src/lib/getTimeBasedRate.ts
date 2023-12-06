import { isFridayRush } from "./isFridayRush";

/** */
const defaultRate = 1.0;
/** */
const fridayRushRate = 1.2;

/** */
export function getTimeBasedRate(date: Date): number {
  return isFridayRush(date) ? fridayRushRate : defaultRate;
}
