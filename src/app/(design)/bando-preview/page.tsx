import type { Metadata } from "next";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroTitle, HeroIntro, HeroLead, HeroDetail } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import Content2, { Content2Item } from "@/components/caseStudy/Content2";
import Content3 from "@/components/caseStudy/Content3";
import Content4 from "@/components/caseStudy/Content4";
import Content5 from "@/components/caseStudy/Content5";
import { ImagesFocus } from "@/components/caseStudy/Images";
import {
  JumboTitle,
  Subtitle24,
  Subtitle36,
  FocusText,
  LeadText,
  BodyText,
  ContentBorderedItem,
} from "@/components/caseStudy/Typography";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const bando = (file: string) => `/design/bando/Product/${file}`;
const bold = (text: string) => <strong className="font-bold text-[#1d1d1d]">{text}</strong>;
/** Underlined for emphasis, per Figma — not a real hyperlink (no URL is bound to these names in the file). */
const underline = (text: string) => <span className="underline">{text}</span>;
const strike = (text: string) => <span className="line-through">{text}</span>;

/**
 * Draft/test page: Bando's content, rebuilt with the shared case-study
 * components (Content1-5, Images, Hero, Breadcrumb) we're polishing from
 * the Figma "Demo" frame — structure scaffolded from the "Bando" frame
 * (node 3557:24288), copy taken verbatim (English) from the Bando Google
 * Doc. Unlisted intentionally (not linked from /home, noindex): this is
 * a component test, not a published project.
 */
export default function BandoPreview() {
  return (
    <ContentGrid className="flex flex-col gap-0 pb-24">
      <Breadcrumb client="Bando" project="Safe, Invest & Pay in one app." />

      {/* Hero */}
      <div className="flex flex-col gap-10 py-10 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-4">
          <HeroMeta
            items={[
              { label: "Client", value: "Bando" },
              { label: "Service", value: "Product design" },
              { label: "Year", value: "2026" },
              { label: "Industry", value: "Fintech" },
            ]}
          />
          <HeroIntro>
            <HeroTitle>Safe, Invest &amp; Pay in one app.</HeroTitle>
            <HeroLead>
              Bando was a fintech. Users could {bold("invest")} in tokenized CETES, stocks like Tesla, gold, or
              crypto like Bitcoin.
            </HeroLead>
            <BodyText>
              Users could also create {bold("their own savings goals")} and {bold("pay")} for everyday
              purchases.
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <HeroDetail label="Main objetive">
            <BodyText>
              {bold("It should feel like a traditional bank,")} but everything ran on blockchain.
              <br />
              The product was announced publicly, but it never launched.
            </BodyText>
          </HeroDetail>
          <HeroDetail label="My rol">
            <BodyText>
              Principal designer.
              <br />
              <br />
              Special thanks to {underline("Ab")}, {underline("Eduardo Ríos")}, and {underline("Guayabas")} for
              trusting me and letting me be part of this amazing project.
            </BodyText>
          </HeroDetail>
        </div>
      </div>

      <ImagesFocus image={{ src: bando("Welcome.jpg"), alt: "Bando welcome screen" }} />

      {/* Content-1: Context */}
      <Content1 title="Context" subtitle="Bando had two types of users">
        <ContentBorderedItem>
          <Subtitle24>People (B2C)</Subtitle24>
          <BodyText>First, people who wanted to invest, with little or medium experience.</BodyText>
        </ContentBorderedItem>
        <ContentBorderedItem>
          <Subtitle24>Companies (B2B)</Subtitle24>
          <BodyText>
            Second, other fintechs. Bando wanted established companies to connect our product to their apps.
          </BodyText>
        </ContentBorderedItem>
        <div className="flex w-[480px] flex-col gap-2">
          <Subtitle24>Business goal</Subtitle24>
          <LeadText>Bando earned a fee on every transaction, so the business needed volume.</LeadText>
          <BodyText>
            That gave me three design goals: Conversion, so people actually invest; Trust, so blockchain feels
            safe; and Scalability, so the design works for other companies too.
          </BodyText>
        </div>
      </Content1>

      {/* Content-1: Challenge */}
      <Content1 title="Challenge">
        <div className="flex w-[480px] flex-col gap-2">
          <FocusText>How do we make something complex feel simple and trustworthy?</FocusText>
          <BodyText>
            For most people, blockchain is new and confusing.
            <br />
            So this was the question behind every decision I made.
          </BodyText>
        </div>
      </Content1>

      {/* Content-5: Research */}
      <Content5
        title="Research"
        focus="We created the user personas, and I gave feedback on it. Then I joined the user interviews and tests."
        body={
          <>
            I tested the flows, made changes, and tested again.
            <br />
            <br />→ Persona
            <br />→ Test
            <br />→ Iterate
            <br />
            <br />
            That was thanks to {underline("Julián")}, who did the research to give us a guide about our main
            user personas.
          </>
        }
        image={{ src: bando("Research.jpg"), alt: "Bando user research personas" }}
      />

      {/* Explorations — a one-off layout per Figma (title/focus/body beside two stacked images), not one of the reusable shells */}
      <hr className="w-screen ml-[calc(50%-50vw)] border-[#6e6e73]" />
      <div className="flex flex-col gap-10 py-10">
        <JumboTitle>Explorations</JumboTitle>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex w-full flex-col gap-2 md:w-[560px]">
            <FocusText>From the sketches to screens</FocusText>
            <BodyText>
              This is how {bold("the visual started: on paper.")}
              <br />
              The UI showed users their investments, returns, goal progress, and transactions, all in one
              place.
            </BodyText>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div className="relative h-[360px] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bando("Sketch-1.jpg")}
                alt="Bando low-fidelity sketches"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative h-[360px] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bando("Sketch-2.jpg")}
                alt="Bando sketches to screens"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content-2: Design goals */}
      <Content2 title="Design Goals">
        <Content2Item first image={{ src: bando("Convertion.jpg"), alt: "Bando conversion flow" }}>
          <div>
            <JumboTitle>1.</JumboTitle>
            <Subtitle36>Convertion</Subtitle36>
          </div>
          <FocusText>Transactions in a couple taps.</FocusText>
          <ContentBorderedItem>
            <BodyText>
              From the home screen, users can make a transaction directly, without going to another screen.
              <br />
              <br />
              We placed the most popular investments right there. We also set a default amount, which users can
              change.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Trust.jpg"), alt: "Bando trust and simplicity" }}>
          <div>
            <JumboTitle>2.</JumboTitle>
            <Subtitle36>Trust &amp; Simplicity</Subtitle36>
          </div>
          <FocusText>Focus on the content.</FocusText>
          <ContentBorderedItem>
            <BodyText>
              We kept a clear {bold("hierarchy of elements and data,")} with nothing extra. Accent colors
              appear only when the screen needs them, like CTAs and price changes.
              <br />
              <br />
              The goal: {bold("clear, minimal screens.")}
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Themeable.jpg"), alt: "Bando themeable design system" }}>
          <div>
            <JumboTitle>3.</JumboTitle>
            <Subtitle36>A scalable design system</Subtitle36>
          </div>
          <FocusText>One system, many brands</FocusText>
          <ContentBorderedItem>
            <BodyText>
              For the B2B side, I built a {bold("themeable design system.")}
              <br />
              The components and the structure stayed the same, but {bold("each company could change")} colors,
              typography, borders, and other visual details to match their own brand.
              <br />
              <br />
              Here you can see the same component with two different brands. We explored this with an
              established Mexican fintech, and they liked it so much that they asked us to redesign some of
              their own flows.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
      </Content2>

      {/* Content-2: It wasn't all sweet */}
      <Content2 title="It wasn't all sweet">
        <Content2Item first image={{ src: bando("Logos.jpg"), alt: "Bando logo evolution, before and after" }}>
          <Subtitle36>The brand problem</Subtitle36>
          <FocusText>The old logo {bold("didn't scale")}</FocusText>
          <ContentBorderedItem>
            <BodyText>
              It wasn&apos;t designed to scale. At small sizes, like an app icon, the symbol got lost. Also, our
              products {bold("didn't look connected;")} they looked like different companies.
              <br />
              <br />
              So I raised my hand and proposed a {underline("rebrand.")}
              <br />
              <br />
              {bold("Evolution,")} not {strike("revolution")}
              <br />
              <br />
              One option was to change the logo completely.
              <br />
              <br />
              But the founders wanted to keep it, because the symbol had a special meaning for them. So I
              decided to evolve it instead.
              <br />
              <br />
              I kept the meaning, but fixed the problems: it works at {bold("any size now,")} and it became the
              base of a complete visual system.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Legal.jpg"), alt: "Bando legal requirements component" }}>
          <Subtitle36>Legal requirements</Subtitle36>
          <FocusText>To keep the screens simple, I had removed some legal information... But it was required.</FocusText>
          <ContentBorderedItem>
            <BodyText>
              Instead of fighting it, I designed a way to show it without breaking the flow, and I made it a
              component in the design system, so it was {bold("consistent everywhere.")}
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Saving.jpg"), alt: "Bando saving goals, before and after" }}>
          <Subtitle36>Saving goals</Subtitle36>
          <FocusText>
            {bold("In user tests,")} we noticed that users {bold("didn't understand some tasks,")} so we made
            these changes:
          </FocusText>
          <ContentBorderedItem>
            <BodyText>
              1. Screen title
              <br />
              It needed to be {bold("clearer.")}
              <br />
              <br />
              2. Secondary tasks
              <br />
              {bold('"Add goal"')} didn&apos;t belong on this screen.
              <br />
              <br />
              3. CTA Add
              <br />
              {bold("We moved")} it closer to the thumb.
              <br />
              <br />
              4. Labels
              <br />
              We made them {bold("bigger")} and {bold("added details.")}
              <br />
              <br />
              5. Assets
              <br />
              We changed the {bold("grid to a list.")}
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Founders.jpg"), alt: "Bando buy/sell modal, before and after" }}>
          <Subtitle36>Two founders, Two opinions</Subtitle36>
          <FocusText>
            One founder wanted to {bold("show a lot of information")} on the first screen. The other wanted
            very little. Instead of choosing a side, I went back to our user persona and our goals.
          </FocusText>
          <ContentBorderedItem>
            <BodyText>
              Our users had little experience, so too much information {bold("could scare them.")}
              <br />
              <br />
              But too little could feel like we were hiding something.
              <br />
              <br />
              {bold("So we found a middle point:")}
              <br />
              We kept the interaction in a modal, but reduced the information and decisions inside it.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
      </Content2>

      {/* Content-3: Result */}
      <Content3
        title="Result"
        columns={[
          { body: "Previews about V1 product.", image: { src: bando("Final-1.jpg"), alt: "Bando final product, V1 previews" } },
          { body: "Content to the public announcement.", image: { src: bando("Final-2.jpg"), alt: "Bando public announcement content" } },
        ]}
      />

      {/* Content-4: Learnings */}
      <Content4
        title="Learnings"
        items={[
          {
            subtitle: "What we validated",
            body: (
              <>
                {bold("We validated the product with users,")} we had real interest from another fintech, and
                the product was announced publicly. What stopped it was regulation, not design.
              </>
            ),
          },
          {
            subtitle: "What I learned",
            body: (
              <>
                I learned two things.
                <br />
                <br />
                1st – Ask about legal and regulatory limits
                <br />
                From day one, even as a designer.
                <br />
                <br />
                2nd – Push for a smaller MVP
                <br />
                to get real data sooner.
              </>
            ),
          },
        ]}
      />

      <OtherProjects currentHref="/bando-preview" />
    </ContentGrid>
  );
}
