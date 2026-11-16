/**
 * Shared hover style for clickable list rows (Figma node 3601:44043):
 * on desktop hover, the row gets left/right borders (matching its
 * existing top divider) plus matching horizontal padding, reading as
 * an outlined box. No arrow, no content shift — reuse this for any
 * future listing of clickable lines.
 */
export const CLICKABLE_ROW_CLASS =
  "transition-[padding,border-color] duration-200 md:hover:border-l md:hover:border-r md:hover:border-[#909096] md:hover:px-4";
