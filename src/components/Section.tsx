import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import type { ReactElement, ReactNode } from "react";
import { PaddedIcon } from "./PaddedIcon";

export function Section({ children }: { children: ReactNode }) {
  return (
    <FormControl>
      <Stack spacing={3}>{children}</Stack>
    </FormControl>
  );
}

interface HeaderProps {
  /** The title of the section. */
  title: string;
  /** The description of the section. */
  description: string;
  /** The icon element to be displayed alongside the title. */
  icon: ReactElement;
  /** The HTML id of the element the label is associated with. */
  htmlFor?: string;
}

function Header({ title, description, icon, htmlFor }: HeaderProps) {
  return (
    <HStack>
      <PaddedIcon>{icon}</PaddedIcon>
      <VStack alignItems="start" spacing={0}>
        <FormLabel
          as={htmlFor ? "label" : "span"}
          size="sm"
          margin={0}
          htmlFor={htmlFor}
        >
          {title}
        </FormLabel>
        <FormHelperText as="p" fontSize="md" margin={0}>
          {description}
        </FormHelperText>
      </VStack>
    </HStack>
  );
}

function Content({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Section.Header = Header;
Section.Content = Content;
