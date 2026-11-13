import Image from "next/image";
import ContentGrid from "@/components/ContentGrid";
import OtherProjects from "@/components/OtherProjects";
import Breadcrumb from "@/components/caseStudy/Breadcrumb";
import { HeroMeta, HeroTitle, HeroIntro, HeroLead } from "@/components/caseStudy/Hero";

const bando = (file: string) => `/design/bando/Product/${file}`;

function renderBody(body: string) {
  const parts = body.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-[#1d1d1d]">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[36px] font-bold text-[#1d1d1d]">{children}</p>;
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[21px] font-bold text-[#1d1d1d] mb-2">{children}</p>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[16px] tracking-[0.15px] text-[#6e6e73] ${className}`}>{children}</p>;
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-[28px] font-light text-[#6e6e73]">{children}</p>;
}

function Sub({
  children,
  bordered = true,
}: {
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return <div className={bordered ? "border-l border-black pl-4" : ""}>{children}</div>;
}

function Figure({ src, alt, caption, aspect = "aspect-[596/360]" }: { src: string; alt: string; caption?: string; aspect?: string }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className={`relative w-full ${aspect}`}>
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      {caption && <p className="text-[11px] text-[#6e6e73]">{caption}</p>}
    </div>
  );
}

const linkClass = "underline underline-offset-4 text-[#1d1d1d]";

export default function Project10() {
  return (
    <ContentGrid className="pb-24 flex flex-col gap-16">
      {/* Back link + breadcrumb */}
      <div className="pt-6">
        <Breadcrumb client="Bando" project="Safe, Invest & Pay in one app." />
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-10 md:flex-row md:gap-10">
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
            <Body>
              Users could also create <strong className="font-bold text-[#1d1d1d]">their own savings goals</strong>{" "}
              and <strong className="font-bold text-[#1d1d1d]">pay</strong> for everyday purchases.
            </Body>
          </HeroIntro>
        </div>
        <div className="flex flex-1 flex-col">
          <Body>
            The idea was simple: <br />
            <strong className="font-bold text-[#1d1d1d]">it should feel like a traditional bank,</strong> but
            everything ran on blockchain.
            <br />
            <br />
            The product was announced publicly, but it never launched.
          </Body>
        </div>
      </div>

      <Figure src={bando("Welcome.jpg")} alt="Bando welcome screen" aspect="aspect-[1200/700]" />

      {/* Context */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1">
          <SectionTitle>Context</SectionTitle>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Lead>Bando had two types of users:</Lead>
            <div className="flex flex-col gap-6">
              <Sub>
                <SubLabel>People (B2C)</SubLabel>
                <Body>First, people who wanted to invest, with little or medium experience.</Body>
              </Sub>
              <Sub>
                <SubLabel>Companies (B2B)</SubLabel>
                <Body>
                  Second, other fintechs. Bando wanted established companies to connect our product to their
                  apps.
                </Body>
              </Sub>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Business goal</p>
            <Lead>
              Bando earned a fee on every transaction, so the business{" "}
              <strong className="font-bold text-[#1d1d1d]">needed volume.</strong>
            </Lead>
            <Body>
              That gave me three design goals: Conversion, so people actually invest; Trust, so blockchain
              feels safe; and Scalability, so the design works for other companies too.
            </Body>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1">
          <SectionTitle>Challenge</SectionTitle>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Body>
            For most people, <strong className="font-bold text-[#1d1d1d]">blockchain is new and confusing.</strong>
            <br />
            So this was the question behind every decision I made.
          </Body>
          <Lead>
            How do we make something complex{" "}
            <strong className="font-bold text-[#1d1d1d]">feel simple and trustworthy?</strong>
          </Lead>
        </div>
      </div>

      {/* Research */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <SectionTitle>Research</SectionTitle>
          <Lead>We created the user personas, and I gave feedback on it.</Lead>
          <Body>
            Then I joined the user interviews and tests. I tested the flows, made changes, and tested again.
          </Body>
          <Lead>
            → Persona
            <br />
            → Test
            <br />
            → Iterate
          </Lead>
          <Body>
            That was thanks to{" "}
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className={linkClass}>
              Julián
            </a>
            , who did the research to give us a guide about our main user personas.
          </Body>
        </div>
        <div className="flex-1">
          <Figure src={bando("Research.jpg")} alt="Bando user research personas" />
        </div>
      </div>

      {/* Explorations */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16 md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <SectionTitle>Explorations</SectionTitle>
          <p className="text-[24px] font-bold text-[#1d1d1d]">From the sketches to screens</p>
          <Body>
            This is how the visual started: on paper. The UI showed users their investments, returns, goal
            progress, and transactions, all in one place.
          </Body>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Figure src={bando("Sketch-1.jpg")} alt="Bando low-fidelity sketches" />
          <Figure src={bando("Sketch-2.jpg")} alt="Bando sketches to screens" />
        </div>
      </div>

      {/* Design goals */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16">
        <SectionTitle>Design goals</SectionTitle>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[24px] font-bold text-[#1d1d1d]">Conversion</p>
              <Lead>Transactions in a couple taps.</Lead>
              <Body>
                From the home screen, users can make a transaction directly, without going to another screen.
                We placed the most popular investments right there. We also set a default amount, which users
                can change.
              </Body>
            </div>
            <div className="flex-1">
              <Figure src={bando("Convertion.jpg")} alt="Bando conversion flow" />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[24px] font-bold text-[#1d1d1d]">Trust &amp; Simplicity</p>
              <Lead>Focus on the content.</Lead>
              <Body>
                We kept a clear hierarchy of elements and data, with nothing extra. Accent colors appear only
                when the screen needs them, like CTAs and price changes.
                <br />
                The goal: clear, minimal screens.
              </Body>
            </div>
            <div className="flex-1">
              <Figure src={bando("Trust.jpg")} alt="Bando trust and simplicity" />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[24px] font-bold text-[#1d1d1d]">A scalable design system</p>
              <Lead>One system, many brands.</Lead>
              <Body>
                For the B2B side, I built a themeable design system. The components and the structure stayed
                the same, but each company could change colors, typography, borders, and other visual details
                to match their own brand.
                <br />
                <br />
                Here you can see the same component with two different brands. We explored this with an
                established Mexican fintech, and they liked it so much that they asked us to redesign some of
                their own flows.
              </Body>
            </div>
            <div className="flex-1">
              <Figure src={bando("Themeable.jpg")} alt="Bando themeable design system" />
            </div>
          </div>
        </div>
      </div>

      {/* It wasn't all sweet */}
      <div className="flex flex-col gap-16 border-t border-black/20 pt-16">
        <SectionTitle>It wasn&apos;t all sweet</SectionTitle>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">The brand problem</p>
            <Lead>The old logo didn&apos;t scale.</Lead>
            <Body>
              It wasn&apos;t designed to scale. At small sizes, like an app icon, the symbol got lost. Also,
              our products didn&apos;t look connected; they looked like different companies.
              <br />
              So I raised my hand and proposed a rebrand.
            </Body>
            <p className="text-[24px] font-bold text-[#1d1d1d] mt-4">Evolution, not revolution</p>
            <Body>
              One option was to change the logo completely.
              <br />
              But the founders wanted to keep it, because the symbol had a special meaning for them. So I
              decided to evolve it instead.
            </Body>
            <Body>
              I kept the meaning, but fixed the problems: it works at any size now, and it became the base of
              a complete visual system.
            </Body>
          </div>
          <div className="flex-1">
            <Figure src={bando("Logos.jpg")} alt="Bando logo evolution, before and after" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Legal requirements</p>
            <Body>
              To keep the screens simple, I had removed some legal information... But it was required.
              <br />
              <br />
              Instead of fighting it, I designed a way to show it without breaking the flow, and I made it a
              component in the design system, so it was consistent everywhere.
            </Body>
          </div>
          <div className="flex-1">
            <Figure src={bando("Legal.jpg")} alt="Bando legal requirements component" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Saving goals</p>
            <Body>
              In user tests, we noticed that users didn&apos;t understand some tasks, so we made these
              changes:
            </Body>
            <div className="flex flex-col gap-4 mt-2">
              <Sub>
                <SubLabel>1. Screen title</SubLabel>
                <Body>It needed to be clearer.</Body>
              </Sub>
              <Sub>
                <SubLabel>2. Secondary tasks</SubLabel>
                <Body>&ldquo;Add goal&rdquo; didn&apos;t belong on this screen.</Body>
              </Sub>
              <Sub>
                <SubLabel>3. CTA Add</SubLabel>
                <Body>We moved it closer to the thumb.</Body>
              </Sub>
              <Sub>
                <SubLabel>4. Labels</SubLabel>
                <Body>We made them bigger and added details.</Body>
              </Sub>
              <Sub bordered={false}>
                <SubLabel>5. Assets</SubLabel>
                <Body>We changed the grid to a list.</Body>
              </Sub>
            </div>
          </div>
          <div className="flex-1">
            <Figure src={bando("Saving.jpg")} alt="Bando saving goals, before and after" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#1d1d1d]">Two founders, Two opinions</p>
            <Body>
              One founder wanted to show a lot of information on the first screen. The other wanted very
              little. Instead of choosing a side, I went back to our user persona and our goals.
              <br />
              <br />
              Our users had little experience, so too much information could scare them.
              <br />
              But too little could feel like we were hiding something.
              <br />
              <br />
              So we found a middle point: we kept the interaction in a modal, but reduced the information and
              decisions inside it.
            </Body>
          </div>
          <div className="flex-1">
            <Figure src={bando("Founders.jpg")} alt="Bando buy/sell modal, before and after" />
          </div>
        </div>
      </div>

      {/* Final product */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16">
        <SectionTitle>Final product</SectionTitle>
        <div className="flex flex-col gap-10 md:flex-row">
          <Figure src={bando("Final-1.jpg")} alt="Bando final product, V1 previews" caption="Previews about V1 product." />
          <Figure src={bando("Final-2.jpg")} alt="Bando public announcement content" caption="Content to the public announcement." />
        </div>
      </div>

      {/* Learnings */}
      <div className="flex flex-col gap-10 border-t border-black/20 pt-16">
        <SectionTitle>Learnings</SectionTitle>
      </div>
      <div className="flex flex-col gap-10 -mt-16 md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-[24px] font-bold text-[#1d1d1d]">What we validated</p>
          <Body>
            {renderBody(
              "**We validated the product with users,** we had real interest from another fintech, and the product was announced publicly.\n\nWhat stopped it was regulation, not design."
            )}
          </Body>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-[24px] font-bold text-[#1d1d1d]">What I learned</p>
          <Body>I learned two things.</Body>
          <div className="flex flex-col gap-6">
            <Sub>
              <SubLabel>1st – Ask about legal and regulatory limits</SubLabel>
              <Body>From day one, even as a designer.</Body>
            </Sub>
            <Sub bordered={false}>
              <SubLabel>2nd – Push for a smaller MVP</SubLabel>
              <Body>to get real data sooner.</Body>
            </Sub>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Body>
          Special thanks to{" "}
          <a href="https://www.linkedin.com/in/abrahamcobos/" target="_blank" rel="noreferrer" className={linkClass}>
            Ab
          </a>
          ,{" "}
          <a href="#" target="_blank" rel="noreferrer" className={linkClass}>
            Eduardo Ríos
          </a>
          , and{" "}
          <a href="#" target="_blank" rel="noreferrer" className={linkClass}>
            Guayabas
          </a>{" "}
          for trusting me and letting me be part of this amazing project.
        </Body>
      </div>

      <OtherProjects currentHref="/project10" />
    </ContentGrid>
  );
}
