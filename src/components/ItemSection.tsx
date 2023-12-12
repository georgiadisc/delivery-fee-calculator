import { Stepper } from "@/components/HookUsage";
import { SectionHeaderRow } from "@/components/SectionHeaderRow";
import { FormControl, Stack } from "@chakra-ui/react";
import { ReceiptLongRounded } from "@mui/icons-material";

export function ItemSection() {
  return (
    <FormControl>
      <Stack spacing={3}>
        <SectionHeaderRow
          title="Amount of items"
          description="The total number of individual items in your order."
          icon={<ReceiptLongRounded />}
          htmlFor="items"
        />
        <Stepper />
      </Stack>
    </FormControl>
  );
}
