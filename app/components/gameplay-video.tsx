import { GAMEPLAY_VIDEO } from "@/lib/site-content";

export function GameplayVideo() {
  return (
    <figure className="mx-auto w-full max-w-4xl">
      <div className="pixel-border overflow-hidden rounded-lg bg-pond shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
        <video
          className="aspect-video w-full bg-pond object-contain"
          controls
          playsInline
          preload="metadata"
          poster={GAMEPLAY_VIDEO.poster}
          aria-label={GAMEPLAY_VIDEO.title}
        >
          <source src={GAMEPLAY_VIDEO.src} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-4 text-center text-lg text-lily/60 md:text-xl">
        {GAMEPLAY_VIDEO.title}
      </figcaption>
    </figure>
  );
}
