"use client";

import { ButtonRow } from "@/components/ButtonRow";
import { CartSection } from "@/components/CartSection";
import { DateSection } from "@/components/DateSection";
import { DistanceSection } from "@/components/DistanceSection";
import { ItemSection } from "@/components/ItemSection";
import { TitleSection } from "@/components/TitleSection";
import {
  DeliveryResponse,
  calculateDeliveryFee,
} from "@/lib/calculateDeliveryFee";
import { Flex } from "@chakra-ui/react";

interface Props {
  /** The callback function to handle form submission. */
  onSubmit: (response: DeliveryResponse) => void;
}

export function OrderInputSection({ onSubmit }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData);
    const [cart, distance, items, day, time] = [
      parseFloat(entries.cart as string),
      parseInt(entries.distance as string),
      parseInt(entries.items as string),
      parseInt(entries.day as string),
      new Date(entries.time as string),
    ];

    time.setDate(time.getDate() + (day - time.getDay()));

    onSubmit(
      calculateDeliveryFee({
        cart: cart,
        distance: distance,
        items: items,
        time: time,
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection="column"
        gap={8}
        justifyContent="space-between"
        height="100%"
      >
        <TitleSection />
        <Flex flexDirection="column" gap={6}>
          <CartSection />
          <DistanceSection />
          <ItemSection />
          <DateSection />
        </Flex>
        <ButtonRow />
      </Flex>
    </form>
  );
}
