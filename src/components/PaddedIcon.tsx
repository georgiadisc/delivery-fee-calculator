import { Center, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export function PaddedIcon({ children }: { children: ReactNode }) {
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Center width={10} height={10} bgColor={bgColor} borderRadius={100}>
      {children}
    </Center>
  );
}
