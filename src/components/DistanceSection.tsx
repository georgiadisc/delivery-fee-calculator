import { RangeSlider } from "@/components/RangeSlider";
import { DirectionsBikeRounded } from "@mui/icons-material";
import { Section } from "./Section";

export function DistanceSection() {
  return (
    <Section>
      <Section.Header
        title="Delivery Distance"
        description="The distance to your delivery location."
        icon={<DirectionsBikeRounded />}
        htmlFor="distance"
      />
      <Section.Content>
        <RangeSlider min={1000} max={5000} step={500} />
      </Section.Content>
    </Section>
  );
}
