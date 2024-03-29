"use client";

import { getTimeRange, getWeekStartingFrom } from "@/utils/dateUtils";
import { HStack, Select, VisuallyHidden } from "@chakra-ui/react";
import { useCallback, useState } from "react";

const formatTime = (date: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date);

const dayOptions = Object.entries(
  getWeekStartingFrom({ dayOfWeek: new Date().getDay() })
).map(([label, value]) => ({ label, value }));

const timeOptions = getTimeRange({
  startTime: { hour: 12, minute: 0 },
  endTime: { hour: 24, minute: 0 },
}).map((value) => ({ label: formatTime(new Date(value)), value }));

export function DatePicker() {
  const [selectedDay, setSelectedDay] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleSelectDayChange = useCallback(
    (value: string) => setSelectedDay(value),
    []
  );

  const handleSelectTimeChange = useCallback(
    (value: string) => setSelectedTime(value),
    []
  );

  return (
    <HStack>
      {/* Day Select */}
      <VisuallyHidden>
        <label htmlFor="day">Day</label>
      </VisuallyHidden>
      <Select
        id="day"
        name="day"
        borderRadius={100}
        cursor="pointer"
        value={selectedDay}
        onChange={(e) => {
          handleSelectDayChange(e.target.value);
        }}
      >
        {dayOptions.map((option) => {
          return (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      {/* Time Select */}
      <VisuallyHidden>
        <label htmlFor="time">Time</label>
      </VisuallyHidden>
      <Select
        id="time"
        name="time"
        borderRadius={100}
        cursor="pointer"
        value={selectedTime}
        onChange={(e) => {
          handleSelectTimeChange(e.target.value);
        }}
      >
        {timeOptions.map((option) => {
          return (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    </HStack>
  );
}
