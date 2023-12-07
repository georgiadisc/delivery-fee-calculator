import { isFridayRush } from "./isFridayRush";

/** */
export type TimeBasedEvent = {
  summary: string;
  rate: number;
};

/** */
export const events: Record<string, TimeBasedEvent> = {
  default: { summary: "Default", rate: 1.0 },
  fridayRush: { summary: "Friday Rush", rate: 1.2 },
} as const;

export function getTimeBasedEvent(date: Date): TimeBasedEvent {
  return isFridayRush(date) ? events.fridayRush : events.default;
}
