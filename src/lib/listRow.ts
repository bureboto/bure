/**
 * Shared style for clickable list rows (Figma node 3601:44043): the
 * Default variant already carries 16px horizontal padding and reserves
 * the left/right border space (transparent at rest) on desktop — the
 * Active/hover variant only swaps that border to solid. Keeping the
 * padding and border box present at rest means nothing shifts on
 * hover-in, and animating border-color only (not width/style) is
 * smoothly transitionable. No arrow, no content shift — reuse this for
 * any future listing of clickable lines.
 */
export const CLICKABLE_ROW_CLASS =
  "md:border-l md:border-r md:border-l-transparent md:border-r-transparent md:px-4 md:transition-[border-color] md:duration-300 md:ease-out md:hover:border-l-[#909096] md:hover:border-r-[#909096]";
