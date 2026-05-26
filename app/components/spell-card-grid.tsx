"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { SpellCard } from "@/lib/site-content";
import { spellCards } from "@/lib/site-content";

function SpellCardModal({
  card,
  onClose,
}: {
  card: SpellCard;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spell-card-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-pond/85 backdrop-blur-sm"
        aria-label="Close card details"
        onClick={onClose}
      />
      <article className="pixel-border relative z-10 w-full max-w-md rounded-lg bg-card-bg p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="font-pixel absolute right-4 top-4 text-[10px] uppercase text-lily/60 transition hover:text-lily"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="mx-auto mb-5 aspect-square w-40 max-w-[50%]">
          <Image
            src={card.src}
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </div>
        <h3
          id="spell-card-title"
          className="font-pixel mb-4 text-center text-xs uppercase text-gold md:text-sm"
        >
          {card.name}
        </h3>
        <p className="text-center text-lg leading-relaxed text-lily/85 md:text-xl">
          {card.description}
        </p>
      </article>
    </div>
  );
}

export function SpellCardGrid() {
  const [selected, setSelected] = useState<SpellCard | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <p className="mb-6 font-pixel text-[8px] uppercase tracking-wider text-lily/50 md:text-[10px]">
        Tap a card to read its effect
      </p>
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {spellCards.map((card) => (
          <li key={card.name}>
            <button
              type="button"
              onClick={() => setSelected(card)}
              className="card-hover group flex w-full cursor-pointer flex-col items-center gap-2 rounded-lg border border-swamp-light/20 bg-card-bg p-3 text-left hover:border-gold/50 hover:bg-swamp/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`View ${card.name} details`}
            >
              <div className="relative aspect-square w-full max-w-[88px]">
                <Image
                  src={card.src}
                  alt=""
                  fill
                  className="object-contain drop-shadow-md transition group-hover:scale-105"
                  sizes="88px"
                />
              </div>
              <span className="font-pixel text-center text-[8px] uppercase text-lily/70 group-hover:text-lily md:text-[10px]">
                {card.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {selected ? <SpellCardModal card={selected} onClose={close} /> : null}
    </>
  );
}
