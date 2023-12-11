import {
  theme as chakraTheme,
  extendBaseTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "840px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const colorScheme = extendBaseTheme(
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Button"],
  })
);

const {
  Button,
  CloseButton,
  Form,
  FormLabel,
  Heading,
  Input,
  Modal,
  NumberInput,
  Select,
  Slider,
  Tooltip,
} = chakraTheme.components;

const baseTheme = extendBaseTheme({
  components: {
    Button,
    CloseButton,
    Form,
    FormLabel,
    Heading,
    Input,
    Modal,
    NumberInput,
    Select,
    Slider,
    Tooltip,
  },
});

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendBaseTheme(colorScheme, { breakpoints, config }, baseTheme);

export default theme;
