import {
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

interface Props {
  /** A boolean indicating whether the modal is open. */
  isOpen: boolean;
  /** A function to handle the modal close event. */
  onClose: () => void;
}

export function PricingInfoSection({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent borderRadius={20}>
        <ModalHeader>Delivery Price Calculation</ModalHeader>
        <ModalCloseButton borderRadius={100} />
        <ModalBody>
          <Text>
            Welcome to our transparent and fair pricing system. Here&apos;s a
            breakdown of how we calculate the delivery fee for your order:
          </Text>
          <br />
          {/* Small Order Surcharge */}
          <Heading size="sm">Small Order Surcharge</Heading>
          <br />
          <Text>
            If your cart value is less than 10€, a small order surcharge is
            applied.
            <UnorderedList>
              <ListItem>
                Surcharge = Difference between cart value and 10€.
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          {/* Distance Surcharge */}
          <Heading size="sm">Distance Surcharge</Heading>
          <br />
          <Text>
            A base delivery fee of 2€ is charged for the first 1000 meters
            (1km). For distances longer than 1000 meters, the following rules
            apply:
            <UnorderedList>
              <ListItem>1€ is added for every additional 500 meters.</ListItem>
              <ListItem>Minimum additional fee is always 1€.</ListItem>
            </UnorderedList>
          </Text>
          <br />
          {/* Item Surcharge */}
          <Heading size="sm">Item Surcharge</Heading>
          <br />
          <Text>
            If the number of items is five or more, a surcharge is applied:
            <UnorderedList>
              <ListItem>
                50 cents surcharge for each item above the fifth.
              </ListItem>
              <ListItem>
                For more than 12 items, an additional &quot;bulk&quot; fee of
                1.20€ is added.
              </ListItem>
            </UnorderedList>
          </Text>
          <br />
          {/* Maximum Fee */}
          <Heading size="sm">Maximum Fee</Heading>
          <br />
          <Text>
            The delivery fee, including surcharges, can never exceed 15€.
          </Text>
          <br />
          {/* Friday Rush */}
          <Heading size="sm">Friday Rush</Heading>
          <br />
          <Text>
            During the Friday rush (3 - 7 PM UTC), the total delivery fee
            (including surcharges) is multiplied by 1.2x. However, the fee will
            not exceed the maximum of 15€.
          </Text>
          <br />
          {/* Free Delivery */}
          <Heading size="sm">Free Delivery</Heading>
          <br />
          <Text>
            The delivery is free (0€) when the cart value is equal or more than
            100€.
          </Text>
          <br />
          <Text>
            We hope this explanation makes our pricing clear and easy to
            understand.
          </Text>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
