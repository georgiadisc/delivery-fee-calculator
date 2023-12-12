import { DetailedPriceTable } from "@/components/DetailedPriceTable";
import { DeliveryResponse } from "@/lib/calculateDeliveryFee";
import {
  Box,
  CircularProgress,
  CloseButton,
  Flex,
  HStack,
  Heading,
  ScaleFade,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  /** The delivery response data containing fee details. */
  deliveryResponse: DeliveryResponse;
  /** The callback function to close the component. */
  onClose: () => void;
}

export function PriceBreakdown({ deliveryResponse, onClose }: Props) {
  const { feeToBePaid } = deliveryResponse;
  const [progress, setProgress] = useState(0);

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("blue.500", "blue.200");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  useEffect(() => {
    setProgress((feeToBePaid / 15.0) * 100);
  }, [feeToBePaid]);

  return (
    <Box
      width="100%"
      height="100%"
      borderWidth={1}
      borderColor={borderColor}
      borderRadius={24}
    >
      <ScaleFade in={true} style={{ width: "100%", height: "100%" }}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          padding={6}
          width="100%"
          height="100%"
        >
          <HStack justifyContent="space-between" width="100%">
            <Heading size="md">Price Breakdown</Heading>
            <CloseButton onClick={onClose} borderRadius={100} />
          </HStack>
          <Flex position="relative">
            <CircularProgress
              value={progress}
              color={color}
              trackColor={bg}
              size="200px"
              capIsRound
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              width="200px"
              height="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading size="2xl" variant="bold">
                {feeToBePaid.toFixed(1)}
              </Heading>
            </Box>
          </Flex>
          <HStack justifyContent="space-between" width="100%">
            <DetailedPriceTable data={deliveryResponse} />
          </HStack>
        </Flex>
      </ScaleFade>
    </Box>
  );
}
