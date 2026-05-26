import Image from "next/image";
import Link from "next/link";
import { PLAY_BUTTON, PLAY_URL } from "@/lib/site-content";

type PlayButtonProps = {
  className?: string;
  label?: string;
  size?: "nav" | "hero";
};

const sizeClasses = {
  nav: "w-32 sm:w-36 md:w-40",
  hero: "w-44 sm:w-52 md:w-60",
} as const;

export function PlayButton({
  className = "",
  label = "Play on itch.io",
  size = "hero",
}: PlayButtonProps) {
  return (
    <Link
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative inline-block shrink-0 leading-none transition hover:scale-[1.04] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${sizeClasses[size]} ${className}`}
    >
      <span
        className="play-glow pointer-events-none absolute -inset-3 rounded-full bg-gold/25 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <Image
        src={PLAY_BUTTON.default}
        alt=""
        width={630}
        height={300}
        className="pixel-art block h-auto w-full transition-opacity duration-150 group-hover:opacity-0"
        sizes={
          size === "nav"
            ? "160px"
            : "(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
        }
      />
      <Image
        src={PLAY_BUTTON.hover}
        alt=""
        width={630}
        height={300}
        className="pixel-art absolute inset-0 block h-auto w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        sizes={
          size === "nav"
            ? "160px"
            : "(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
        }
        aria-hidden
      />
    </Link>
  );
}
