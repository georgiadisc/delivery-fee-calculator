import { Stepper } from "@/components/Stepper";
import { ReceiptLongRounded } from "@mui/icons-material";
import { Section } from "./Section";

export function ItemSection() {
  return (
    <Section>
      <Section.Header
        title="Amount of items"
        description="The total number of individual items in your order."
        icon={<ReceiptLongRounded />}
        htmlFor="items"
      />
      <Section.Content>
        <Stepper min={1} step={1} />
      </Section.Content>
    </Section>
  );
}
