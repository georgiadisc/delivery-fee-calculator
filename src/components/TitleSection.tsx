"use client";

import { Button, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import { InfoRounded } from "@mui/icons-material";
import { PricingInfoSection } from "./PricingInfoSection";

export function TitleSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack alignItems="start" gap={4}>
      <Heading as="h1" size="lg">
        Delivery Fee Calculator 📦
      </Heading>
      <Button onClick={onOpen} variant="link" alignSelf="start" gap={2}>
        <InfoRounded />
        Learn how we calculate the delivery fee
      </Button>
      <PricingInfoSection isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
}
