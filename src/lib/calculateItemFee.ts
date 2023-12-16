/** Maximum number of free items before surcharges apply. */
const maxFreeItems = 4;
/** Surcharge rate applied to items beyond the maximum free items. */
const itemSurchargeRate = 0.5;
/** Threshold for applying bulk surcharge to the fee calculation. */
const bulkSurchargeItemThreshold = 12;
/** Fee applied for bulk orders surpassing the item threshold. */
const bulkFee = 1.2;

/**
 * If the number of items is five or more, an additional 50 cent surcharge is
 * added for each item above and including the fifth item. An extra "bulk" fee
 * applies for more than 12 items of 1,20€.
 * @param items - The number of items for which the fee is calculated.
 */
export function calculateItemFee(items: number): number {
  const itemFee = Math.max(0, items - maxFreeItems) * itemSurchargeRate;
  return items > bulkSurchargeItemThreshold ? itemFee + bulkFee : itemFee;
}
