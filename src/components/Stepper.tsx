"use client";

import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

export function Stepper() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
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
        aria-label="decrement"
        tabIndex={0}
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
        aria-label="increment"
        tabIndex={0}
      >
        <AddRounded />
      </Button>
    </HStack>
  );
}
