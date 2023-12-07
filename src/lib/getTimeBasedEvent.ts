import { isFridayRush } from "./isFridayRush";

/** */
export type TimeBasedEvent = Readonly<{
  /** The title of the event. */
  summary: string;
  /** The rate or multiplier associated with the event. */
  rate: number;
  /** Indicates whether the event is disabled. */
  isDisabled?: boolean;
}>;

/** */
export type EventDictionary = Record<string, TimeBasedEvent>;

/** */
export const events: EventDictionary = {
  default: { summary: "Default", rate: 1.0 },
  fridayRush: { summary: "Friday Rush", rate: 1.2 },
} as const;

/** Determines the time-based event for a given date. */
export function getTimeBasedEvent(
  date: Date,
  events: EventDictionary
): TimeBasedEvent {
  return isFridayRush(date) && !events.fridayRush.isDisabled
    ? events.fridayRush
    : events.default;
}
