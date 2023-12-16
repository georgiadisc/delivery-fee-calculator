import { isFridayRush } from "./isFridayRush";

export type TimeBasedEvent = {
  /** The title of the event. */
  summary: string;
  /** The rate or multiplier associated with the event. */
  rate: number;
  /** Indicates whether the event is disabled. */
  isDisabled?: boolean;
};

export type EventDictionary = Record<string, TimeBasedEvent>;

/** A dictionary of predefined Wolt events. */
export const woltEvents = {
  default: { summary: "Default", rate: 1.0 },
  fridayRush: { summary: "Friday Rush", rate: 1.2 },
} as const;

/**
 * Determines the time-based event for a given date.
 * @param date - The date for which to determine the time-based event.
 * @param events - Optional parameter for providing a custom dictionary of
 * events.
 */
export function getTimeBasedEvent(
  date: Date,
  events: EventDictionary = woltEvents
): TimeBasedEvent {
  /**
   * During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee
   * including possible surcharges) will be multiplied by 1.2x.
   */
  return isFridayRush(date) && !events.fridayRush.isDisabled
    ? events.fridayRush
    : events.default;
}
