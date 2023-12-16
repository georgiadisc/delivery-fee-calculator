import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { ScheduleRounded } from "@mui/icons-material";
import { Section } from "./Section";

export function CartSection() {
  return (
    <Section>
      <Section.Header
        title="Cart Value"
        description="The total value of items in your shopping cart."
        icon={<ScheduleRounded />}
        htmlFor="cart"
      />
      <Section.Content>
        <NumberInput id="cart" name="cart" defaultValue={0} min={0}>
          <NumberInputField borderRadius={100} />
        </NumberInput>
      </Section.Content>
    </Section>
  );
}
