"use client";

import { OrderDetailsSection } from "@/components/OrderDetailsSection";
import { OrderInputSection } from "@/components/OrderInputSection";
import { DeliveryResponse } from "@/lib/calculateDeliveryFee";
import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [deliveryResponse, setDeliveryResponse] = useState<DeliveryResponse>();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={8}
      p={{ base: 4, sm: 4, md: 6, lg: 8 }}
      height={{ md: "100dvh" }}
      as="main"
    >
      <OrderInputSection onSubmit={setDeliveryResponse} />
      <OrderDetailsSection
        deliveryResponse={deliveryResponse}
        onClose={() => {
          setDeliveryResponse(undefined);
        }}
      />
    </SimpleGrid>
  );
}
