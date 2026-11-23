import ContentGrid from "@/components/ContentGrid";
import BrandTabs from "@/components/BrandTabs";

export default function BrandKit() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4 pt-6">
        <BrandTabs />
        <div className="flex items-baseline gap-[10px] flex-wrap">
          <h1 className="text-[48px] font-bold leading-none">El Pulso</h1>
          <span className="text-[32px] text-black/80">/</span>
          <span className="text-[32px] text-black/80">Brand Kit</span>
        </div>
      </div>

      <p className="text-[16px] tracking-[0.15px] text-[#6e6e73]">Próximamente.</p>
    </ContentGrid>
  );
}
