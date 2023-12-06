/** */
const maxFreeItems = 4;
/** */
const itemSurchargeRate = 0.5;
/** */
const bulkSurchargeItemThreshold = 12;
/** */
const bulkFee = 1.2;

/** */
export function calculateItemFee(items: number) {
  const itemFee = Math.max(0, items - maxFreeItems) * itemSurchargeRate;
  return items > bulkSurchargeItemThreshold ? itemFee + bulkFee : itemFee;
}
