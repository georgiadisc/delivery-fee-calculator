import { PaddedIcon } from "@/components/PaddedIcon";
import { FormHelperText, FormLabel, HStack, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  /** The title of the section. */
  title: string;
  /** The description of the section. */
  description: string;
  /** The icon element to be displayed alongside the title. */
  icon: ReactElement;
  /** The HTML id of the element the label is associated with. */
  htmlFor?: string;
}

export function SectionHeaderRow({ title, description, icon, htmlFor }: Props) {
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
