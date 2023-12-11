"use client";

import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
