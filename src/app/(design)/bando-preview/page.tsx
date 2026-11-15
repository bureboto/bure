import type { Metadata } from "next";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroTitle, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";
import Content1 from "@/components/caseStudy/Content1";
import Content2, { Content2Item } from "@/components/caseStudy/Content2";
import Content3 from "@/components/caseStudy/Content3";
import Content4 from "@/components/caseStudy/Content4";
import Content5 from "@/components/caseStudy/Content5";
import { ImagesFocus } from "@/components/caseStudy/Images";
import { JumboTitle, Subtitle18, Subtitle24, Subtitle36, FocusText, BodyText, ContentBorderedItem } from "@/components/caseStudy/Typography";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const bando = (file: string) => `/design/bando/Product/${file}`;

/**
 * Draft/test page: Bando's real content, rebuilt with the shared
 * case-study components (Content1-5, Images, Hero, Breadcrumb) we're
 * polishing from the Figma "Demo" frame — scaffolded from the "Bando"
 * frame (node 3557:24288). Unlisted intentionally (not linked from
 * /home, noindex): this is a component test, not a published project.
 *
 * Two labels below ("Goal" / "Solution" above each Design-goals item's
 * Focus/Body block) are placeholders — the real Figma copy for those
 * two short labels wasn't resolved from the design frame, only the
 * surrounding structure.
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
              { label: "Service", value: "Product design, UX/UI" },
              { label: "Year", value: "2026" },
              { label: "Industry", value: "Fintech" },
            ]}
          />
          <HeroIntro>
            <HeroTitle>Safe, Invest &amp; Pay in one app.</HeroTitle>
            <HeroLead>
              Bando was a fintech. Users could <strong className="font-bold text-[#1d1d1d]">invest</strong> in
              tokenized CETES, stocks like Tesla, gold, or crypto like Bitcoin.
            </HeroLead>
            <BodyText>
              Users could also create <strong className="font-bold text-[#1d1d1d]">their own savings goals</strong>{" "}
              and <strong className="font-bold text-[#1d1d1d]">pay</strong> for everyday purchases.
            </BodyText>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col">
          <BodyText>
            The idea was simple: <br />
            <strong className="font-bold text-[#1d1d1d]">it should feel like a traditional bank,</strong> but
            everything ran on blockchain.
            <br />
            <br />
            The product was announced publicly, but it never launched.
          </BodyText>
        </div>
      </div>

      <ImagesFocus image={{ src: bando("Welcome.jpg"), alt: "Bando welcome screen" }} />

      {/* Content-1: Context */}
      <Content1 title="Context" subtitle="Bando had two types of users:">
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
        <ContentBorderedItem>
          <Subtitle24>Business goal</Subtitle24>
          <FocusText>Bando earned a fee on every transaction, so the business needed volume.</FocusText>
          <BodyText>
            That gave me three design goals: Conversion, so people actually invest; Trust, so blockchain feels
            safe; and Scalability, so the design works for other companies too.
          </BodyText>
        </ContentBorderedItem>
      </Content1>

      {/* Content-1: Challenge */}
      <Content1 title="Challenge">
        <BodyText>
          For most people, <strong className="font-bold text-[#1d1d1d]">blockchain is new and confusing.</strong>
          <br />
          So this was the question behind every decision I made.
        </BodyText>
        <FocusText>
          How do we make something complex{" "}
          <strong className="font-bold text-[#1d1d1d]">feel simple and trustworthy?</strong>
        </FocusText>
      </Content1>

      {/* Content-5: Research */}
      <Content5
        title="Research"
        focus="We created the user personas, and I gave feedback on it."
        body={
          <>
            Then I joined the user interviews and tests. I tested the flows, made changes, and tested again.
            <br />
            <br />→ Persona
            <br />→ Test
            <br />→ Iterate
          </>
        }
        linksLabel="Credit"
        links={[{ label: "Research by", href: "https://www.linkedin.com/in/", text: "Julián" }]}
        image={{ src: bando("Research.jpg"), alt: "Bando user research personas" }}
      />

      {/* Explorations — a one-off layout per Figma (title/focus/body beside two stacked images), not one of the reusable shells */}
      <hr className="w-screen ml-[calc(50%-50vw)] border-[#6e6e73]" />
      <div className="flex flex-col gap-10 py-10 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-[560px]">
          <JumboTitle>Explorations</JumboTitle>
          <Subtitle24>From the sketches to screens</Subtitle24>
          <BodyText>
            This is how the visual started: on paper. The UI showed users their investments, returns, goal
            progress, and transactions, all in one place.
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

      {/* Content-2: Design goals */}
      <Content2 title="Design goals">
        <Content2Item image={{ src: bando("Convertion.jpg"), alt: "Bando conversion flow" }}>
          <div>
            <JumboTitle>1</JumboTitle>
            <Subtitle36>Conversion</Subtitle36>
          </div>
          <div className="flex flex-col gap-2">
            <Subtitle18>Goal</Subtitle18>
            <FocusText>Transactions in a couple taps.</FocusText>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              From the home screen, users can make a transaction directly, without going to another screen. We
              placed the most popular investments right there. We also set a default amount, which users can
              change.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Trust.jpg"), alt: "Bando trust and simplicity" }}>
          <div>
            <JumboTitle>2</JumboTitle>
            <Subtitle36>Trust &amp; Simplicity</Subtitle36>
          </div>
          <div className="flex flex-col gap-2">
            <Subtitle18>Goal</Subtitle18>
            <FocusText>Focus on the content.</FocusText>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              We kept a clear hierarchy of elements and data, with nothing extra. Accent colors appear only
              when the screen needs them, like CTAs and price changes.
              <br />
              The goal: clear, minimal screens.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Themeable.jpg"), alt: "Bando themeable design system" }}>
          <div>
            <JumboTitle>3</JumboTitle>
            <Subtitle36>A scalable design system</Subtitle36>
          </div>
          <div className="flex flex-col gap-2">
            <Subtitle18>Goal</Subtitle18>
            <FocusText>One system, many brands.</FocusText>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              For the B2B side, I built a themeable design system. The components and the structure stayed the
              same, but each company could change colors, typography, borders, and other visual details to
              match their own brand.
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
        <Content2Item image={{ src: bando("Logos.jpg"), alt: "Bando logo evolution, before and after" }}>
          <div>
            <JumboTitle>1</JumboTitle>
            <Subtitle36>The brand problem</Subtitle36>
          </div>
          <div className="flex flex-col gap-2">
            <Subtitle18>Goal</Subtitle18>
            <FocusText>The old logo didn&apos;t scale.</FocusText>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              It wasn&apos;t designed to scale. At small sizes, like an app icon, the symbol got lost. Also, our
              products didn&apos;t look connected; they looked like different companies. So I raised my hand
              and proposed a rebrand.
              <br />
              <br />
              One option was to change the logo completely. But the founders wanted to keep it, because the
              symbol had a special meaning for them. So I decided to evolve it instead — kept the meaning, but
              fixed the problems: it works at any size now, and it became the base of a complete visual system.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Legal.jpg"), alt: "Bando legal requirements component" }}>
          <div>
            <JumboTitle>2</JumboTitle>
            <Subtitle36>Legal requirements</Subtitle36>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              To keep the screens simple, I had removed some legal information... but it was required. Instead
              of fighting it, I designed a way to show it without breaking the flow, and I made it a component
              in the design system, so it was consistent everywhere.
            </BodyText>
          </ContentBorderedItem>
        </Content2Item>
        <Content2Item image={{ src: bando("Saving.jpg"), alt: "Bando saving goals, before and after" }}>
          <div>
            <JumboTitle>3</JumboTitle>
            <Subtitle36>Saving goals</Subtitle36>
          </div>
          <div className="flex flex-col gap-2">
            <Subtitle18>Solution</Subtitle18>
            <BodyText>In user tests, we noticed that users didn&apos;t understand some tasks, so we made these changes:</BodyText>
          </div>
          <div className="flex flex-col gap-4">
            <ContentBorderedItem>
              <Subtitle18>1. Screen title</Subtitle18>
              <BodyText>It needed to be clearer.</BodyText>
            </ContentBorderedItem>
            <ContentBorderedItem>
              <Subtitle18>2. Secondary tasks</Subtitle18>
              <BodyText>&ldquo;Add goal&rdquo; didn&apos;t belong on this screen.</BodyText>
            </ContentBorderedItem>
            <ContentBorderedItem>
              <Subtitle18>3. CTA Add</Subtitle18>
              <BodyText>We moved it closer to the thumb.</BodyText>
            </ContentBorderedItem>
            <ContentBorderedItem>
              <Subtitle18>4. Labels</Subtitle18>
              <BodyText>We made them bigger and added details.</BodyText>
            </ContentBorderedItem>
            <ContentBorderedItem>
              <Subtitle18>5. Assets</Subtitle18>
              <BodyText>We changed the grid to a list.</BodyText>
            </ContentBorderedItem>
          </div>
        </Content2Item>
        <Content2Item image={{ src: bando("Founders.jpg"), alt: "Bando buy/sell modal, before and after" }}>
          <div>
            <JumboTitle>4</JumboTitle>
            <Subtitle36>Two founders, Two opinions</Subtitle36>
          </div>
          <ContentBorderedItem>
            <Subtitle18>Solution</Subtitle18>
            <BodyText>
              One founder wanted to show a lot of information on the first screen. The other wanted very
              little. Instead of choosing a side, I went back to our user persona and our goals.
              <br />
              <br />
              Our users had little experience, so too much information could scare them. But too little could
              feel like we were hiding something.
              <br />
              <br />
              So we found a middle point: we kept the interaction in a modal, but reduced the information and
              decisions inside it.
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
                <strong className="font-bold text-[#1d1d1d]">
                  We validated the product with users,
                </strong>{" "}
                we had real interest from another fintech, and the product was announced publicly.
                <br />
                <br />
                What stopped it was regulation, not design.
              </>
            ),
          },
          {
            subtitle: "What I learned",
            body: (
              <div className="flex flex-col gap-4">
                <BodyText>I learned two things.</BodyText>
                <ContentBorderedItem>
                  <Subtitle18>1st – Ask about legal and regulatory limits</Subtitle18>
                  <BodyText>From day one, even as a designer.</BodyText>
                </ContentBorderedItem>
                <ContentBorderedItem>
                  <Subtitle18>2nd – Push for a smaller MVP</Subtitle18>
                  <BodyText>to get real data sooner.</BodyText>
                </ContentBorderedItem>
              </div>
            ),
          },
        ]}
      />

      <OtherProjects currentHref="/bando-preview" />
    </ContentGrid>
  );
}
