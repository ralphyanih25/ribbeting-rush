"use client";

import Image from "next/image";
import { useState } from "react";
import { AssetSlot } from "./asset-slot";
import { storyBeats, storyProps, storySceneDecor } from "@/lib/site-content";

function SceneProp({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`pixel-art pointer-events-none absolute select-none ${className ?? ""}`}
      aria-hidden={!alt}
    />
  );
}

function LifeBar({
  ratio,
  variant,
  label,
}: {
  ratio: number;
  variant: "player" | "boss";
  label: string;
}) {
  const clamped = Math.min(1, Math.max(0, ratio));
  const percent = Math.round(clamped * 100);

  return (
    <div
      className="mb-2 w-full max-w-[7.5rem] sm:max-w-[9rem] md:max-w-[10.5rem]"
      role="meter"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${label} life ${percent}%`}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="font-pixel text-[6px] uppercase tracking-wider text-lily/50 md:text-[8px]">
          Life
        </span>
        <span className="font-pixel text-[6px] tabular-nums text-lily/60 md:text-[8px]">
          {percent}%
        </span>
      </div>
      <div
        className={`h-2.5 overflow-hidden rounded-sm border-2 bg-pond/90 md:h-3 ${
          variant === "player"
            ? "border-swamp-light/70"
            : "border-gold/40"
        }`}
      >
        <div
          className={`h-full transition-[width] duration-500 ease-out ${
            variant === "player"
              ? "bg-gradient-to-r from-[#3d8b5a] to-lily"
              : "bg-gradient-to-r from-[#8b2e2e] to-gold"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export function StorySection() {
  const [beatIndex, setBeatIndex] = useState(0);
  const beat = storyBeats[beatIndex];
  const isLeft = beat.side === "left";

  const goNext = () => setBeatIndex((i) => (i + 1) % storyBeats.length);

  return (
    <div className="story-stage pixel-border relative mx-auto min-h-[min(92vh,780px)] w-full overflow-hidden rounded-lg">
      {/* Pond backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1a3d2e] via-[#0f281c] to-[#0a1410]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(207,235,255,0.12),transparent)]"
        aria-hidden
      />

      {/* Swamp decor — trees, rocks, lilipods */}
      {storySceneDecor.map((prop, i) => (
        <SceneProp
          key={`${prop.src}-${i}`}
          src={prop.src}
          alt={prop.alt}
          width={prop.width}
          height={prop.height}
          className={prop.className}
        />
      ))}

      {/* Character stage */}
      <div className="absolute inset-x-0 bottom-[148px] top-8 flex items-end justify-center gap-2 px-2 sm:gap-8 md:bottom-[168px] md:px-8">
        <div
          className={`relative flex flex-col items-center transition-all duration-300 ${
            isLeft
              ? "z-10 scale-100 opacity-100"
              : "z-0 scale-90 opacity-55"
          }`}
        >
          <span className="font-pixel mb-1 text-[8px] uppercase text-gold md:text-[10px]">
            Chat Thysreal
          </span>
          <LifeBar
            ratio={beat.chatLife}
            variant="player"
            label="Chat Thysreal"
          />
          <div className="relative h-36 w-32 sm:h-44 sm:w-40 md:h-52 md:w-48">
            <AssetSlot
              src={storyBeats[0].portrait}
              alt="Chat Thysreal"
              fill
              className="h-full w-full"
              imageClassName="pixel-art object-contain object-bottom drop-shadow-[0_8px_0_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        <span
          className="font-pixel mb-16 hidden text-[10px] text-lily/30 sm:inline"
          aria-hidden
        >
          vs
        </span>

        <div
          className={`relative flex flex-col items-center transition-all duration-300 ${
            !isLeft
              ? "z-10 scale-105 opacity-100"
              : "z-0 scale-90 opacity-55"
          }`}
        >
          <span className="font-pixel mb-1 text-[8px] uppercase text-gold md:text-[10px]">
            Miss Information
          </span>
          <LifeBar
            ratio={beat.frogLife}
            variant="boss"
            label="Miss Information"
          />
          <div className="relative h-40 w-36 sm:h-48 sm:w-44 md:h-56 md:w-52">
            <AssetSlot
              src={storyBeats[1].portrait}
              alt="Miss Information — giant frog"
              fill
              className="h-full w-full"
              imageClassName="pixel-art object-contain object-bottom drop-shadow-[0_12px_0_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* RPG dialogue box */}
      <div className="dialogue-box absolute inset-x-0 bottom-0 z-20 border-t-4 border-gold bg-card-bg/95 backdrop-blur-sm">
        <SceneProp
          src={storyProps.lilipodFlower}
          alt=""
          width={32}
          height={32}
          className="left-2 top-2 w-6 opacity-80 md:left-4 md:top-3 md:w-8"
        />
        <SceneProp
          src={storyProps.lilipodFlower}
          alt=""
          width={32}
          height={32}
          className="right-2 top-2 w-6 -scale-x-100 opacity-80 md:right-4 md:top-3 md:w-8"
        />
        <SceneProp
          src={storyProps.lilipod}
          alt=""
          width={28}
          height={28}
          className="bottom-3 left-1/4 hidden w-5 opacity-50 md:block"
        />
        <SceneProp
          src={storyProps.rocks[0].src}
          alt=""
          width={24}
          height={18}
          className="bottom-2 right-1/4 hidden w-4 opacity-40 md:block"
        />

        <div className="relative px-5 pb-5 pt-10 md:px-8 md:pb-6 md:pt-12">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-pixel text-[10px] uppercase text-gold md:text-xs">
              {beat.speaker}
            </p>
            <p className="text-base text-lily/50 md:text-lg">{beat.role}</p>
          </div>

          <p className="text-xl leading-snug text-lily/90 md:text-2xl">
            {beat.text}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2" aria-label="Story progress">
              {storyBeats.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBeatIndex(i)}
                  className={`h-2 w-2 rounded-sm transition ${
                    i === beatIndex
                      ? "bg-gold"
                      : "bg-swamp-light/60 hover:bg-swamp-light"
                  }`}
                  aria-label={`Go to line ${i + 1}`}
                  aria-current={i === beatIndex ? "step" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="font-pixel text-[8px] uppercase text-lily/80 transition hover:text-gold md:text-[10px]"
            >
              {beatIndex < storyBeats.length - 1 ? "Next ▶" : "Replay ▶"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
