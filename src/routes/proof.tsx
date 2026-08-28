import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof - Bridge Quote Evidence for the RBNT Recovery Playbook" },
      {
        name: "description",
        content:
          "Every bridge quote in the RBNT recovery playbook, screenshotted directly and checked on two independent tools (Lucid Labs Bridge and Oku) so no single tool's bug looks like a Redbelly problem.",
      },
      {
        property: "og:title",
        content: "Proof - Bridge Quote Evidence for the RBNT Recovery Playbook",
      },
      {
        property: "og:description",
        content:
          "Screenshotted bridge quotes for Ethereum, Base, BSC, Arbitrum, Polygon, Avalanche, Solana and Sonic, verified on Lucid Labs Bridge and Oku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProofPage,
});

type Block = {
  heading: string;
  image: string;
  caption: string;
};

const LUCID_BLOCKS: Block[] = [
  {
    heading: "Ethereum",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/eth%20to%20redbelly.png",
    caption: "0.00013 ETH (~$0.31), about 4 minutes",
  },
  {
    heading: "Arbitrum",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/arb%20to%20redbelly.png",
    caption: "0.00013 ETH (~$0.31), about 172 minutes",
  },
  {
    heading: "Avalanche",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/avax%20to%20redbelly.png",
    caption: "0.04 AVAX (~$0.32), about 61 minutes",
  },
  {
    heading: "Base",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/base%20to%20redbelly.png",
    caption: "0.00013 ETH (~$0.32), about 1 minute",
  },
  {
    heading: "BSC",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/bsc%20to%20redbelly.png",
    caption: "0.00044 BNB (~$0.31), about 124 minutes",
  },
  {
    heading: "Polygon",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/polygon%20to%20redbelly.png",
    caption: "3.02 POL (~$0.32), about 176 minutes",
  },
  {
    heading: "Solana",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/solana%20to%20redbelly.png",
    caption:
      "No route found for selected parameters. Expected, this is the two hop case covered in Failure Mode 2, not a bug.",
  },
  {
    heading: "Sonic",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence/sonic%20to%20redbelly.png",
    caption: "10.62 S (~$0.31), about 86 minutes",
  },
];

const OKU_BLOCKS: Block[] = [
  {
    heading: "Ethereum",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/eth%20to%20redbelly.png",
    caption: "~$0.36, about 5 minutes, tagged Fastest",
  },
  {
    heading: "Arbitrum",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/arb%20to%20redbelly.png",
    caption: "~$0.33, about 2 hours 53 minutes",
  },
  {
    heading: "Avalanche",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/avax%20to%20redbelly.png",
    caption: "~$0.31, about 1 hour 1 minute",
  },
  {
    heading: "Base",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/base%20to%20redbelly.png",
    caption: "~$0.32, about 1 minute",
  },
  {
    heading: "BSC",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/bsc%20to%20redbelly.png",
    caption: "~$0.33, about 2 hours 5 minutes",
  },
  {
    heading: "Polygon",
    image:
      "https://raw.githubusercontent.com/0xDarkSeidBull/daotask16/main/evidence2/pol%20to%20redbelly.png",
    caption: "~$0.32, about 2 hours 56 minutes",
  },
];

const LOGO = "/dao-logo-on-dark.png";

function BlockCard({ block }: { block: Block }) {
  return (
    <div className="rounded-[8px] border border-[#3a4650] bg-[#1e2a31] p-6 sm:p-8">
      <h3 className="text-[20px] leading-[1.25] font-semibold tracking-[-0.01em] text-[#EF5350] sm:text-[22px]">
        {block.heading}
      </h3>
      <img
        src={block.image}
        alt={`${block.heading} bridge quote screenshot`}
        loading="lazy"
        className="mt-4 block w-full rounded-[6px] border border-[#3a4650]"
      />
      <p className="mt-3 font-mono text-[14px] leading-[1.5] text-[#b8c4cc]">
        {block.caption}
      </p>
    </div>
  );
}

function ProofPage() {
  const [tab, setTab] = useState<"lucid" | "oku">("lucid");
  const blocks = tab === "lucid" ? LUCID_BLOCKS : OKU_BLOCKS;

  return (
    <div className="min-h-screen bg-[#0F181D] font-sans text-[#e4ebf0]">
      <header className="sticky top-0 z-50 border-b border-[#27323a] bg-[#121b20]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <a href="#top" className="flex shrink-0 items-center p-[11px]" aria-label="Back to top">
            <img
              src={LOGO}
              alt="Redbelly DAO logo"
              width={78}
              height={40}
              className="block h-10 w-auto shrink-0"
            />
          </a>
          <Link
            to="/"
            className="ml-auto border-b border-transparent py-1 text-[14px] text-[#b8c4cc] transition-colors hover:border-b-[#ffb3ae] hover:text-[#ffb3ae]"
          >
            Playbook
          </Link>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[12px] font-bold tracking-[0.1em] text-[#ffb3ae] uppercase">
          Evidence
        </p>
        <h1 className="mt-3 text-[34px] leading-[1.1] font-bold tracking-[-0.01em] text-[#e4ebf0] sm:text-[44px]">
          Proof
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.55] text-[#b8c4cc]">
          Every bridge quote in this guide, screenshotted directly. Checked on
          two independent tools so no single tool's bug looks like a Redbelly
          problem.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => setTab("lucid")}
            className={
              "rounded-[6px] border px-5 py-2.5 text-[15px] font-semibold transition-colors " +
              (tab === "lucid"
                ? "border-[#EF5350] bg-[#EF5350] text-white"
                : "border-[#3a4650] bg-[#1b252a] text-[#93a4ae] hover:text-[#b8c4cc]")
            }
            aria-pressed={tab === "lucid"}
          >
            Lucid Labs Bridge
          </button>
          <button
            type="button"
            onClick={() => setTab("oku")}
            className={
              "rounded-[6px] border px-5 py-2.5 text-[15px] font-semibold transition-colors " +
              (tab === "oku"
                ? "border-[#EF5350] bg-[#EF5350] text-white"
                : "border-[#3a4650] bg-[#1b252a] text-[#93a4ae] hover:text-[#b8c4cc]")
            }
            aria-pressed={tab === "oku"}
          >
            Oku
          </button>
        </div>

        {/* Stacked blocks */}
        <div className="mt-8 space-y-8">
          {blocks.map((block) => (
            <BlockCard key={block.heading} block={block} />
          ))}
        </div>

        {/* Note + back link */}
        <div className="mt-12 rounded-[8px] border border-[#3a4650] bg-[#1b252a] p-6 sm:p-8">
          <p className="text-[15px] leading-[1.5] text-[#b8c4cc]">
            Oku does not have Solana or Sonic screenshots, only Lucid Labs
            Bridge was tested on those two chains.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block border-b border-[#ffb3ae] font-semibold text-[#ffb3ae] transition-colors hover:text-[#EF5350]"
          >
            Back to the main playbook
          </Link>
        </div>
      </main>

      <footer className="border-t border-[#27323a] bg-[#0a1216] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-[12px] font-bold tracking-[0.1em] text-[#93a4ae] uppercase">
            Research deliverable . Redbelly DAO
          </p>
          <p className="mt-4 text-[15px] leading-[1.5] text-[#93a4ae] italic">
            Every quote above was captured directly from the named tool. If a
            number here disagrees with what the tool shows today, the tool has
            changed since capture.
          </p>
        </div>
      </footer>
    </div>
  );
}
