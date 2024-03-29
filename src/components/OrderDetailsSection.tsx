import { PriceBreakdown } from "@/components/PriceBreakdown";
import { DeliveryResponse } from "@/lib/calculateDeliveryFee";
import { Box, ScaleFade } from "@chakra-ui/react";
import Image from "next/image";

const woltBackground = {
  alt: "Placeholder",
  src: "/wolt_background.jpeg",
  blurDataURL: "L19_%@O[s:pJu6R,ofsmoLj]juR*",
};

interface Props {
  /** The delivery response data containing fee details. */
  deliveryResponse?: DeliveryResponse;
  /** The callback function to close the order details section. */
  onClose: () => void;
}

export function OrderDetailsSection({ deliveryResponse, onClose }: Props) {
  return (
    <Box height={{ sm: 640, md: "100%" }} borderRadius={24} overflow="hidden">
      {deliveryResponse ? (
        <PriceBreakdown deliveryResponse={deliveryResponse} onClose={onClose} />
      ) : (
        <ScaleFade
          in={true}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            alt={woltBackground.alt}
            src={woltBackground.src}
            placeholder="blur"
            blurDataURL={woltBackground.blurDataURL}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 840px) 100vw, 50vw"
            fill
          />
        </ScaleFade>
      )}
    </Box>
  );
}
