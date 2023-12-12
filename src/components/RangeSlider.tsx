"use client";

import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  /** The default value of the slider. Defaults to the minimum value. */
  defaultValue?: number;
  /** The minimum value of the slider. */
  min: number;
  /** The maximum value of the slider. */
  max: number;
  /** The step value for each movement of the slider. */
  step: number;
}

export function RangeSlider({ defaultValue, min, max, step }: Props) {
  const [sliderValue, setSliderValue] = useState(defaultValue ?? min);
  const [showTooltip, setShowTooltip] = useState(false);

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("blue.500", "blue.200");

  return (
    <Flex gap={4}>
      <Text fontSize="sm" as="span">
        Km
      </Text>
      <Slider
        defaultValue={sliderValue}
        min={min}
        max={max}
        step={step}
        onChange={(v) => setSliderValue(v)}
        onPointerEnter={() => setShowTooltip(true)}
        onPointerLeave={() => setShowTooltip(false)}
        focusThumbOnChange
      >
        <input
          id="distance"
          name="distance"
          value={sliderValue}
          style={{ display: "none" }}
          readOnly
        />
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          bg={bg}
          color={color}
          placement="top"
          isOpen={showTooltip}
          label={sliderValue}
          borderRadius={8}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      <Text fontSize="sm" as="output">
        {sliderValue}
      </Text>
    </Flex>
  );
}
