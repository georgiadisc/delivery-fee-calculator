import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "840px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ breakpoints, config });

export default theme;
