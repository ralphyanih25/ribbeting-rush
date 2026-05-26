import Image from "next/image";
import Link from "next/link";
import { AssetSlot } from "./components/asset-slot";
import { GameplayVideo } from "./components/gameplay-video";
import { PlayButton } from "./components/play-button";
import { Reveal } from "./components/reveal";
import { SpellCardGrid } from "./components/spell-card-grid";
import { StorySection } from "./components/story-section";
import { SwampAmbient } from "./components/swamp-ambient";
import {
  coreGameplay,
  featureScreens,
  GAME_LOGO,
  genreTags,
  inspirations,
  mechanics,
  PLAY_URL,
  references,
  team,
  techStack,
} from "@/lib/site-content";

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-20 md:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-title mb-3">{eyebrow}</p>
          <h2 className="font-pixel-display mb-10 max-w-3xl text-sm uppercase text-foreground md:text-base">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-pond text-foreground">
      {/* Hero */}
      <header className="relative min-h-[92vh]">
        <AssetSlot
          src="/assets/hero/background.jpg"
          alt="Swamp pond background"
          fill
          priority
          className="absolute inset-0 z-0"
          imageClassName="brightness-[0.55] saturate-110"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-pond/25 via-pond/55 to-pond/95" />
        <SwampAmbient />

        <nav className="relative z-10 flex items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
          <a
            href="#"
            className="relative block h-14 w-44 shrink-0 sm:h-16 sm:w-52 md:h-20 md:w-64"
          >
            <Image
              src={GAME_LOGO}
              alt="Ribbeting Rush"
              fill
              priority
              className="pixel-art object-contain object-left"
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
            />
          </a>
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5 md:gap-6">
            <div className="flex flex-wrap items-center gap-4 text-lg sm:gap-6 sm:text-xl">
              <a href="#story" className="nav-link text-lily/80 hover:text-lily">
                Story
              </a>
              <a href="#cards" className="nav-link text-lily/80 hover:text-lily">
                Cards
              </a>
              <a href="#inspiration" className="nav-link text-lily/80 hover:text-lily">
                Inspiration
              </a>
              <a href="#team" className="nav-link text-lily/80 hover:text-lily">
                Team
              </a>
            </div>
            <PlayButton size="nav" />
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-8 text-center md:px-10 lg:px-16">
          <div className="mb-8 w-full max-w-xl animate-float">
            <AssetSlot
              src="/assets/hero/logo.png"
              alt="Ribbeting Rush logo"
              width={640}
              height={280}
              priority
              className="mx-auto w-full max-w-lg"
              imageClassName="h-auto w-full drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            />
          </div>

          <p className="font-pixel mb-2 text-[10px] uppercase tracking-[0.2em] text-lily/70 md:text-xs">
            Presented by L.E.G.O B.A.T.M.A.N
          </p>
          <Reveal>
            <p className="mb-8 max-w-2xl text-xl text-lily/90 md:text-2xl">
              Top-down boss-rush shooter meets deck builder. Swap spell cards in
              both hands, outplay giant frogs, and climb the leaderboards.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {genreTags.map((tag) => (
                <span
                  key={tag}
                  className="tag-shimmer font-pixel rounded-full border border-swamp-light/60 bg-swamp/80 px-3 py-1.5 text-[8px] uppercase text-lily backdrop-blur-sm md:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* Story */}
      <Section id="story" eyebrow="Story" title="Chat Thysreal’s rite of passage">
        <StorySection />
      </Section>

      {/* Mechanics */}
      <Section
        id="mechanics"
        eyebrow="Game mechanics"
        title="Switch cards. Fight bosses. Survive the swamp."
        className="bg-swamp/40"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {mechanics.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <article className="card-hover h-full rounded-lg border border-swamp-light/30 bg-card-bg p-6">
                <h3 className="font-pixel mb-3 text-[10px] uppercase text-gold md:text-xs">
                  {item.title}
                </h3>
                <p className="text-lg text-lily/80 md:text-xl">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core gameplay */}
      <Section
        id="gameplay"
        eyebrow="Core gameplay"
        title="Build. Fight. Rank up."
      >
        <Reveal className="mb-14">
          <p className="-mt-6 mb-8 max-w-2xl text-lg text-lily/75 md:text-xl">
            Watch a short run — swap spell cards mid-fight, dodge boss patterns,
            and survive the swamp.
          </p>
          <GameplayVideo />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {coreGameplay.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="card-hover flex flex-col gap-4 rounded-lg p-1">
                <div className="pixel-border aspect-video overflow-hidden rounded-lg">
                  <AssetSlot
                    src={item.asset}
                    alt={item.title}
                    fill
                    className="min-h-[180px] w-full"
                  />
                </div>
                <h3 className="font-pixel text-[10px] uppercase text-gold md:text-xs">
                  {item.title}
                </h3>
                <p className="text-lg text-lily/75 md:text-xl">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Spell cards */}
      <Section
        id="cards"
        eyebrow="Spell cards"
        title="Channel druid magic through your deck"
        className="bg-swamp/40"
      >
        <p className="-mt-6 mb-10 max-w-2xl text-lg text-lily/75 md:text-xl">
          Hold two cards at once and cycle through a deck of five. These are the
          cards wired in today — drop more art into{" "}
          <code className="font-pixel rounded bg-pond px-1.5 py-0.5 text-[8px] text-lily md:text-[10px]">
            public/assets/books/
          </code>
          .
        </p>
        <SpellCardGrid />
      </Section>

      {/* Features */}
      <Section id="features" eyebrow="Game features" title="From deck builder to boss arena">
        <div className="grid gap-8 md:grid-cols-3">
          {featureScreens.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="card-hover flex flex-col gap-4 rounded-lg p-1">
                <div className="pixel-border aspect-[4/3] overflow-hidden rounded-lg">
                  <AssetSlot
                    src={item.asset}
                    alt={item.title}
                    fill
                    className="min-h-[200px] w-full"
                  />
                </div>
                <h3 className="font-pixel text-[10px] uppercase text-gold md:text-xs">
                  {item.title}
                </h3>
                <p className="text-lg text-lily/75 md:text-xl">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Inspiration */}
      <Section
        id="inspiration"
        eyebrow="Inspiration"
        title="References behind the swamp"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {inspirations.slice(0, 3).map((image) => (
              <li
                key={image.src}
                className="pixel-border overflow-hidden rounded-lg bg-card-bg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1154}
                  height={1179}
                  className="pixel-art h-auto w-full"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            {inspirations.slice(3).map((image, index) => (
              <li
                key={image.src}
                className={`pixel-border overflow-hidden rounded-lg bg-card-bg sm:col-span-2 ${
                  index === 0 ? "sm:col-start-2" : "sm:col-start-4"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1154}
                  height={1179}
                  className="pixel-art h-auto w-full"
                  sizes="(max-width: 1024px) 50vw, 320px"
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Team */}
      <Section
        id="team"
        eyebrow="Meet the team"
        title="L.E.G.O B.A.T.M.A.N"
        className="bg-swamp/40"
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex flex-col items-center rounded-lg border border-swamp-light/25 bg-card-bg p-4 text-center"
            >
              <div className="mb-4 aspect-square w-full max-w-[140px] overflow-hidden rounded-full">
                <AssetSlot
                  src={member.asset}
                  alt={member.name}
                  fill
                  className="min-h-[120px] w-full rounded-full"
                  imageClassName="rounded-full object-cover"
                />
              </div>
              <h3 className="font-pixel text-[10px] uppercase text-foreground md:text-xs">
                {member.name}
              </h3>
              <p className="mt-2 text-base text-lily/70 md:text-lg">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Tech stack */}
      <Section id="tech" eyebrow="Technical stack" title="Built with pixel tools & Godot">
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12">
          {techStack.map((tool) => (
            <li
              key={tool.name}
              className="flex w-24 flex-col items-center gap-3 text-center"
            >
              <div className="relative h-16 w-16">
                <AssetSlot
                  src={tool.asset}
                  alt={tool.name}
                  fill
                  className="h-16 w-16"
                  imageClassName="object-contain"
                />
              </div>
              <span className="font-pixel text-[8px] uppercase text-lily/70 md:text-[10px]">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA + footer */}
      <footer className="border-t border-swamp-light/30 bg-pond px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
          <h2 className="font-pixel text-xs uppercase tracking-widest text-gold md:text-sm">
            Ready to ribbet?
          </h2>
          <Reveal>
            <Link
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel pixel-border inline-block bg-gold px-8 py-4 text-[10px] uppercase tracking-wider text-pond transition hover:scale-105 hover:brightness-110 active:scale-95 md:text-xs"
            >
              Play the game
            </Link>
          </Reveal>
          <div className="w-full max-w-xl space-y-2 text-lg text-lily/60 md:text-xl">
            <p className="font-pixel text-[10px] uppercase tracking-wider text-lily/50">
              References
            </p>
            <ul className="flex flex-col gap-2">
              {references.map((ref) => (
                <li key={ref.href}>
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 hover:text-lily hover:underline"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-pixel text-[8px] uppercase text-lily/40 md:text-[10px]">
            Ribbeting Rush · Funcom2 · L.E.G.O B.A.T.M.A.N
          </p>
        </div>
      </footer>
    </div>
  );
}
