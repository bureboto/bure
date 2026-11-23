import type { ReactNode } from "react";
import ContentGrid from "@/components/ContentGrid";
import BrandTabs from "@/components/BrandTabs";
import Content2, { Content2Item } from "@/components/caseStudy/Content2";
import { HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import { Subtitle24, FocusText, BodyText } from "@/components/caseStudy/Typography";

// Placeholder copy from the Figma frame — replace with the final text.
const LOREM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966";

/** Left column of a Content2Item: optional Subtitle24 + Focus (28px) + Body (16px). */
function ItemText({ title, focus = LOREM, body = LOREM }: { title?: ReactNode; focus?: ReactNode; body?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {title && <Subtitle24>{title}</Subtitle24>}
      <FocusText>{focus}</FocusText>
      <BodyText>{body}</BodyText>
    </div>
  );
}

/** Jumbo titles are 80px per Figma; step down on phones so "Tipografía" fits a 390px screen. */
function Title({ children }: { children: ReactNode }) {
  return <span className="text-[64px] md:text-[80px]">{children}</span>;
}

/**
 * 16:9 image slots (580×326 in Figma) shown as #E3E9EF boxes until the
 * final images are added to the repo. `count` stacks several vertically.
 */
function ImageSlots({ count = 1 }: { count?: number }) {
  return (
    <div className="flex w-full flex-col gap-10">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="w-full aspect-video bg-[#e3e9ef]" />
      ))}
    </div>
  );
}

/**
 * El Pulso Brand Kit, built with the shared case-study components (as in
 * the Bando/INE pages) from the Figma frame "Brand Kit" (node 3670:56256).
 */
export default function BrandKit() {
  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <div className="flex flex-col gap-4 pt-6">
        <BrandTabs />
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-[48px] font-bold leading-none text-[#1d1d1d]">Pulso</h1>
          <p className="text-[21px] text-[#6e6e73]">
            / <span className="text-[#1d1d1d]">Brand kit</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroIntro>
            <HeroLead>{LOREM}</HeroLead>
            <BodyText>{LOREM}</BodyText>
          </HeroIntro>
        </div>
        <div className="hidden flex-1 md:block" />
      </div>

      <Content2 title={<Title>Logo</Title>}>
        <Content2Item first media={<ImageSlots />}>
          <ItemText />
        </Content2Item>
        <Content2Item media={<ImageSlots />}>
          <ItemText title="Contrastes" />
        </Content2Item>
        <Content2Item media={<ImageSlots />}>
          <ItemText title="Estructura" />
        </Content2Item>
        <Content2Item media={<ImageSlots />}>
          <ItemText title="Usos correctos" />
        </Content2Item>
        <Content2Item media={<ImageSlots />}>
          <ItemText title="Tamaños mínimos" />
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Color</Title>}>
        <Content2Item first media={<ImageSlots />}>
          <ItemText title="Paleta" />
        </Content2Item>
        <Content2Item media={<ImageSlots />}>
          <ItemText title="Usos" />
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Tipografía</Title>}>
        <Content2Item first media={<ImageSlots count={2} />}>
          <ItemText />
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Iconos</Title>}>
        <Content2Item first media={<ImageSlots />}>
          <ItemText />
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Layout</Title>}>
        <Content2Item first media={<ImageSlots count={3} />}>
          <ItemText />
        </Content2Item>
      </Content2>

      <Content2 title={<Title>Casos de uso</Title>}>
        <Content2Item first media={<ImageSlots />}>
          <ItemText />
        </Content2Item>
      </Content2>
    </ContentGrid>
  );
}
