import { isFriday } from "@/utils/dateUtils";

/** The starting hour for Friday rush hours. */
const fridayRushStartHour = 15;

/** The ending hour for Friday rush hours. */
const fridayRushEndHour = 19;

/** Checks if the given hours are within the defined Friday rush hours. */
function isWithinRushHours(hours: number): boolean {
  return hours >= fridayRushStartHour && hours < fridayRushEndHour;
}

/**
 * Checks if the given date and time fall within the defined Friday rush hours.
 */
export function isFridayRush(date: Date): boolean {
  return isFriday(date.getUTCDay()) && isWithinRushHours(date.getUTCHours());
}
