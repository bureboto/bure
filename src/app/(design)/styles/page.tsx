"use client";

import ContentGrid from "@/components/ContentGrid";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroIntro, HeroTitle, HeroDetail, HeroStats } from "@/components/caseStudy/Hero";

/**
 * Living style guide / kitchen-sink preview for design.bure.art.
 * Mirrors the "Demo" test frame in Figma (node 3575:38906): every text
 * scale, color, and section layout used across case-study pages, filled
 * with generic placeholder copy (Title / Subtitle / Focus / Body / Detail
 * / Mini-title / Link / "00" / "#") so new styles can be checked in
 * context before they're used on a real project page.
 */

function JumboTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[80px] font-light text-[#1d1d1d]">{children}</p>;
}

function Subtitle36({ children }: { children: React.ReactNode }) {
  return <p className="text-[36px] font-bold text-[#1d1d1d]">{children}</p>;
}

function Subtitle24({ children }: { children: React.ReactNode }) {
  return <p className="text-[24px] font-bold text-[#1d1d1d]">{children}</p>;
}

function Subtitle18({ children }: { children: React.ReactNode }) {
  return <p className="text-[18px] font-bold text-[#1d1d1d]">{children}</p>;
}

function FocusText({ children }: { children: React.ReactNode }) {
  return <p className="text-[28px] text-[#6e6e73]">{children}</p>;
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[16px] tracking-[0.16px] text-[#6e6e73] ${className}`}>{children}</p>;
}

function DetailText({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] text-[#6e6e73]">{children}</p>;
}

function MiniTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-bold text-[#6e6e73]">{children}</p>;
}

function LinkText({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] tracking-[0.16px] text-[#1d1d1d] underline underline-offset-2">{children}</p>;
}

function Placeholder({ className = "h-[400px] w-full" }: { className?: string }) {
  return <div className={`bg-[#f0f0f5] ${className}`} />;
}

function ContentBorderedItem({ children }: { children: React.ReactNode }) {
  return <div className="border-l border-[#1d1d1d] pl-4">{children}</div>;
}

function ImageWithDetail({ aspect = "h-[400px]", grow = true }: { aspect?: string; grow?: boolean }) {
  return (
    <div className={`flex ${grow ? "flex-1" : "shrink-0"} flex-col gap-2 ${aspect}`}>
      <Placeholder className="w-full flex-1" />
      <DetailText>Detail</DetailText>
    </div>
  );
}

/** Full-bleed section divider — breaks out of ContentGrid's centered column to span the full viewport width, matching Figma's edge-to-edge section borders. */
function SectionDivider() {
  return <hr className="w-screen ml-[calc(50%-50vw)] border-[#6e6e73]" />;
}

export default function StylesPage() {
  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      {/* Breadcrumb */}
      <Breadcrumb client="Title" project="Detail" />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroMeta
            items={[0, 1, 2, 3].map(() => ({ label: "Minititle", value: "Body" }))}
          />
          <HeroIntro>
            <HeroTitle>Title</HeroTitle>
            <FocusText>Focus</FocusText>
            <BodyText>Body</BodyText>
          </HeroIntro>
          <HeroDetail label="Subtitle">
            <BodyText>Body</BodyText>
          </HeroDetail>
          <HeroDetail label="Subtitle">
            <BodyText>Body</BodyText>
          </HeroDetail>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label="Subtitle">
            <HeroStats stats={[0, 1, 2, 3].map(() => ({ value: "00", label: "Detail" }))} />
            <BodyText>Body</BodyText>
          </HeroDetail>
          <HeroDetail label="Subtitle">
            <HeroStats stats={[0, 1, 2, 3].map(() => ({ value: "00", label: "Detail" }))} />
            <BodyText>Body</BodyText>
          </HeroDetail>
        </div>
      </div>

      {/* Images — single, full width */}
      <div className="flex flex-col items-center gap-2 py-10">
        <Placeholder className="h-[400px] w-full" />
        <DetailText>Detail</DetailText>
      </div>

      {/* Content-1: jumbo title + bordered stacked items */}
      <SectionDivider />
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex-1">
          <JumboTitle>Title</JumboTitle>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <Subtitle36>Subtitle</Subtitle36>
          {[0, 1, 2].map((i) => (
            <ContentBorderedItem key={i}>
              <Subtitle24>Subtitle</Subtitle24>
              <FocusText>Focus</FocusText>
              <BodyText>Body</BodyText>
            </ContentBorderedItem>
          ))}
        </div>
      </div>

      {/* Content-2: Intro (jumbo + body) over a numbered split item */}
      <SectionDivider />
      <div className="flex flex-col gap-10 py-10">
        <div className="flex items-start gap-20">
          <div className="flex w-[480px] flex-col gap-4 pr-20">
            <JumboTitle>Title</JumboTitle>
            <BodyText>Body</BodyText>
          </div>
          <div className="flex-1" />
        </div>
        <div className="flex items-start gap-10 border-t border-[#6e6e73] pt-10 md:flex-row">
          <div className="flex w-full flex-col gap-6 pr-20 md:w-[480px]">
            <div>
              <JumboTitle>#</JumboTitle>
              <Subtitle36>Subtitle</Subtitle36>
            </div>
            <div className="flex flex-col gap-2">
              <Subtitle18>Subtitle</Subtitle18>
              <FocusText>Focus</FocusText>
            </div>
            <ContentBorderedItem>
              <Subtitle18>Subtitle</Subtitle18>
              <BodyText>Body</BodyText>
            </ContentBorderedItem>
          </div>
          <div className="flex-1 self-stretch">
            <Placeholder className="h-[360px] w-full" />
          </div>
        </div>
      </div>

      {/* Content-3: title over two subtitle+body+image columns */}
      <SectionDivider />
      <div className="flex flex-col gap-10 py-10">
        <JumboTitle>Title</JumboTitle>
        <div className="flex flex-col gap-10 md:flex-row">
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-1 flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Subtitle24>Subtitle</Subtitle24>
                <BodyText>Body</BodyText>
              </div>
              <Placeholder className="h-[360px] w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Content-4: title over a 3x2 grid of bordered subtitle+body items */}
      <SectionDivider />
      <div className="flex flex-col gap-10 py-10">
        <JumboTitle>Title</JumboTitle>
        {[0, 1].map((row) => (
          <div key={row} className="flex items-start gap-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 border-l border-[#6e6e73] pl-4">
                <Subtitle24>Subtitle</Subtitle24>
                <BodyText>Body</BodyText>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Images — double (2-up) */}
      <div className="flex items-start gap-10 py-10">
        <ImageWithDetail />
        <ImageWithDetail />
      </div>

      {/* Images — triple (3-up) */}
      <div className="flex items-start gap-10 py-10">
        <ImageWithDetail />
        <ImageWithDetail />
        <ImageWithDetail />
      </div>

      {/* Images — Grid-6 (3 over 3) */}
      <div className="flex flex-col gap-6 py-10">
        <div className="flex items-start gap-6">
          <ImageWithDetail />
          <ImageWithDetail />
          <ImageWithDetail />
        </div>
        <div className="flex items-start gap-6">
          <ImageWithDetail />
          <ImageWithDetail />
          <ImageWithDetail />
        </div>
      </div>

      {/* Images — Grid-4 (2 over 2) */}
      <div className="flex flex-col gap-6 py-10">
        <div className="flex items-start gap-6">
          <ImageWithDetail />
          <ImageWithDetail />
        </div>
        <div className="flex items-start gap-6">
          <ImageWithDetail aspect="h-[421px]" />
          <ImageWithDetail aspect="h-[421px]" />
        </div>
      </div>

      {/* Images — Complex (single + double stacked, beside a tall image) */}
      <div className="flex items-stretch gap-6 py-10">
        <div className="flex h-[866px] flex-1 flex-col justify-center gap-6">
          <ImageWithDetail aspect="h-[421px]" grow={false} />
          <div className="flex gap-6">
            <ImageWithDetail aspect="h-[421px]" />
            <ImageWithDetail aspect="h-[421px]" />
          </div>
        </div>
        <div className="flex flex-1">
          <ImageWithDetail aspect="h-full" />
        </div>
      </div>

      {/* Content-5: focus+items beside a tall image */}
      <SectionDivider />
      <div className="flex items-start gap-10 py-10">
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-2">
            <JumboTitle>Title</JumboTitle>
            <FocusText>Focus</FocusText>
            <BodyText>Body</BodyText>
          </div>
          <div className="flex flex-col gap-4">
            <Subtitle18>Subtitle</Subtitle18>
            <div className="flex items-start justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <MiniTitle>Mini-title</MiniTitle>
                  <LinkText>Link</LinkText>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Placeholder className="h-[360px] w-full" />
        </div>
      </div>
    </ContentGrid>
  );
}
