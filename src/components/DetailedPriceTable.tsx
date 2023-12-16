import { DeliveryResponse } from "@/lib/calculateDeliveryFee";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface PriceRowProps {
  /** The label of the fee. */
  label: string;
  /** The price value for the fee. */
  value: number;
  /** Whether to apply strikethrough styling to the price. */
  isStrikethrough: boolean;
  /** An optional suffix to be displayed after the price value. */
  suffix?: string;
}

const PriceRow = ({
  label,
  value,
  isStrikethrough,
  suffix = "€",
}: PriceRowProps) => (
  <Tr>
    <Td>{label}</Td>
    <Td
      isNumeric
      textDecorationLine={isStrikethrough ? "line-through" : undefined}
    >
      {`${value.toFixed(2)}${suffix}`}
    </Td>
  </Tr>
);

export function DetailedPriceTable({ data }: { data: DeliveryResponse }) {
  return (
    <TableContainer width="100%" height="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Fee</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <PriceRow
            label="Small Order Surcharge"
            value={data.smallOrderFee}
            isStrikethrough={data.feeToBePaid === 0}
          />
          <PriceRow
            label="Distance Surcharge"
            value={data.distanceFee}
            isStrikethrough={data.feeToBePaid === 0}
          />
          <PriceRow
            label="Item Surcharge"
            value={data.itemFee}
            isStrikethrough={data.feeToBePaid === 0}
          />
          <PriceRow
            label={`${data.event.summary} Rate`}
            value={data.event.rate}
            isStrikethrough={data.feeToBePaid === 0}
            suffix="&times;"
          />
          <PriceRow
            label="Total Fee"
            value={data.totalFee}
            isStrikethrough={data.feeToBePaid === 0 || data.totalFee > 15}
          />
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Fee to be paid</Th>
            <Th isNumeric>{data.feeToBePaid.toFixed(2)}€</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
