import { SectionHeaderRow } from "@/components/SectionHeaderRow";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";
import { ScheduleRounded } from "@mui/icons-material";

export function CartSection() {
  return (
    <FormControl>
      <Stack spacing={3}>
        <SectionHeaderRow
          title="Cart Value"
          description="The total value of items in your shopping cart."
          icon={<ScheduleRounded />}
          htmlFor="cart"
        />
        <NumberInput id="cart" name="cart" defaultValue={0} min={0}>
          <NumberInputField borderRadius={100} />
        </NumberInput>
      </Stack>
    </FormControl>
  );
}
