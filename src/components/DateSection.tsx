import { DatePicker } from "@/components/DatePicker";
import { SectionHeaderRow } from "@/components/SectionHeaderRow";
import { FormControl, Stack } from "@chakra-ui/react";
import { CalendarMonthRounded } from "@mui/icons-material";

export function DateSection() {
  return (
    <FormControl>
      <Stack spacing={3}>
        <SectionHeaderRow
          title="Date"
          description="The date/time when the order is being made."
          icon={<CalendarMonthRounded />}
        />
        <DatePicker />
      </Stack>
    </FormControl>
  );
}
