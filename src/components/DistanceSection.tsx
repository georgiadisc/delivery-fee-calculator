import { RangeSlider } from "@/components/RangeSlider";
import { SectionHeaderRow } from "@/components/SectionHeaderRow";
import { FormControl, Stack } from "@chakra-ui/react";
import { DirectionsBikeRounded } from "@mui/icons-material";

export function DistanceSection() {
  return (
    <FormControl>
      <Stack spacing={3}>
        <SectionHeaderRow
          title="Delivery Distance"
          description="The distance to your delivery location."
          icon={<DirectionsBikeRounded />}
          htmlFor="distance"
        />
        <RangeSlider min={1000} max={5000} step={500} />
      </Stack>
    </FormControl>
  );
}
