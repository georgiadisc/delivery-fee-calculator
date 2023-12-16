"use client";

import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

interface StepperProps {
  /** The default value of the slider. Defaults to the minimum value. */
  defaultValue?: number;
  /** The minimum value of the slider. */
  min: number;
  /** The step value for each movement of the slider. */
  step: number;
}

export function Stepper({ defaultValue, min, step }: StepperProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: step,
      defaultValue: defaultValue ?? min,
      min: min,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Button
        {...dec}
        borderRadius={100}
        width={10}
        height={10}
        borderWidth={1}
        colorScheme="gray"
      >
        <RemoveRounded />
      </Button>
      <Input
        {...input}
        borderRadius={100}
        textAlign="center"
        id="items"
        name="items"
      />
      <Button
        {...inc}
        borderRadius={100}
        width={10}
        height={10}
        borderWidth={1}
        colorScheme="gray"
      >
        <AddRounded />
      </Button>
    </HStack>
  );
}
