import { DatePicker } from "@/components/DatePicker";
import { CalendarMonthRounded } from "@mui/icons-material";
import { Section } from "./Section";

export function DateSection() {
  return (
    <Section>
      <Section.Header
        title="Date"
        description="The date/time when the order is being made."
        icon={<CalendarMonthRounded />}
      />
      <Section.Content>
        <DatePicker />
      </Section.Content>
    </Section>
  );
}
