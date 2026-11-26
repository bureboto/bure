// Section label rotated -90° (reads bottom to top), as in the dashboard Figma.
export default function VerticalLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`flex w-[25px] shrink-0 items-center justify-center ${className}`}>
      <p className="-rotate-90 whitespace-nowrap text-[21px] leading-none tracking-[-0.42px]">{children}</p>
    </div>
  );
}
