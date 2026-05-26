"use client";

const FIREFLIES = [
  { left: "8%", top: "22%", delay: "0s", duration: "7s", size: 3 },
  { left: "18%", top: "58%", delay: "1.2s", duration: "9s", size: 2 },
  { left: "72%", top: "35%", delay: "0.6s", duration: "8s", size: 4 },
  { left: "85%", top: "68%", delay: "2s", duration: "10s", size: 2 },
  { left: "42%", top: "78%", delay: "1.8s", duration: "11s", size: 3 },
  { left: "55%", top: "18%", delay: "0.3s", duration: "6.5s", size: 2 },
  { left: "92%", top: "42%", delay: "2.4s", duration: "8.5s", size: 3 },
  { left: "28%", top: "38%", delay: "1s", duration: "9.5s", size: 2 },
] as const;

const BUBBLES = [
  { left: "12%", delay: "0s", duration: "14s", size: 6 },
  { left: "35%", delay: "3s", duration: "18s", size: 4 },
  { left: "58%", delay: "1.5s", duration: "16s", size: 8 },
  { left: "78%", delay: "5s", duration: "20s", size: 5 },
  { left: "90%", delay: "2s", duration: "17s", size: 4 },
] as const;

export function SwampAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      {FIREFLIES.map((f, i) => (
        <span
          key={`fly-${i}`}
          className="ambient-firefly absolute rounded-full bg-gold"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        />
      ))}
      {BUBBLES.map((b, i) => (
        <span
          key={`bubble-${i}`}
          className="ambient-bubble absolute bottom-0 rounded-full border border-lily/25 bg-lily/5"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
      <div className="hero-glow absolute left-1/2 top-[38%] h-64 w-96 rounded-full bg-gold/10 blur-3xl" />
    </div>
  );
}
