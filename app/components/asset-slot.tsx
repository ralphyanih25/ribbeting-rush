"use client";

import Image from "next/image";
import { useState } from "react";
import { GAME_LOGO } from "@/lib/site-content";

type AssetSlotProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function AssetSlot({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  priority,
  fill,
  width,
  height,
}: AssetSlotProps) {
  const [missing, setMissing] = useState(false);
  const displayLabel = label ?? alt;

  if (missing) {
    const logoClassName = `pixel-art object-contain opacity-80 ${imageClassName}`.trim();

    if (fill) {
      return (
        <div className={`h-full ${className}`.trim()}>
          <div className="relative h-full min-h-full w-full overflow-hidden">
            <Image
              src={GAME_LOGO}
              alt={displayLabel}
              fill
              priority={priority}
              className={logoClassName}
              sizes="100vw"
            />
          </div>
          <span className="sr-only">Missing asset: {src.replace("/assets/", "")}</span>
        </div>
      );
    }

    return (
      <>
        <Image
          src={GAME_LOGO}
          alt={displayLabel}
          width={width ?? 400}
          height={height ?? 400}
          priority={priority}
          className={`${logoClassName} ${className}`.trim()}
        />
        <span className="sr-only">Missing asset: {src.replace("/assets/", "")}</span>
      </>
    );
  }

  if (fill) {
    // Outer wrapper takes layout classes (e.g. absolute inset-0). Inner wrapper
    // must be position:relative with real height — never mix relative + absolute
    // on one node or the fill image can collapse to 0px tall.
    return (
      <div className={`h-full ${className}`.trim()}>
        <div className="relative h-full min-h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${imageClassName}`}
            sizes="100vw"
            onError={() => setMissing(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width ?? 400}
        height={height ?? 400}
        priority={priority}
        className={imageClassName}
        onError={() => setMissing(true)}
      />
    </div>
  );
}
