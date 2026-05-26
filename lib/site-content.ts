export const PLAY_URL = "https://fgio.itch.io/ribbeting-rush";

export const PLAY_BUTTON = {
  default: "/assets/buttons/play.png",
  hover: "/assets/buttons/play-hover.png",
} as const;

export const GAME_LOGO = "/assets/ribbeting-rush-logo.png";

export const characters = {
  chatThysreal: "/assets/others/chat-thysreal.gif",
  missInformation: "/assets/others/miss-information.gif",
} as const;

export const GAMEPLAY_VIDEO = {
  src: "/assets/others/ribbeting-rush.mp4",
  poster: "/assets/features/boss-fight.png",
  title: "Ribbeting Rush gameplay trailer",
} as const;

/** Decorative swamp props for story / scene layouts */
export const storyProps = {
  trees: [
    { src: "/assets/props/tree-one.png", alt: "Swamp tree" },
    { src: "/assets/props/tree-two.png", alt: "Swamp tree" },
    { src: "/assets/props/tree-three.png", alt: "Swamp tree" },
  ],
  rocks: [
    { src: "/assets/props/rock-one.png", alt: "Rock" },
    { src: "/assets/props/rock-two.png", alt: "Rock" },
    { src: "/assets/props/rock-three.png", alt: "Rock" },
  ],
  lilipod: "/assets/props/lilipod.png",
  lilipodFlower: "/assets/props/lilipod-flower.png",
} as const;

/** Prop placements for the story swamp stage (src, size, Tailwind position classes) */
export const storySceneDecor = [
  // Distant canopy
  {
    src: storyProps.trees[2].src,
    alt: "",
    width: 120,
    height: 160,
    className: "-top-4 left-[6%] hidden w-20 opacity-35 md:block lg:w-28",
  },
  {
    src: storyProps.trees[2].src,
    alt: "",
    width: 120,
    height: 160,
    className: "-top-6 right-[10%] hidden w-24 -scale-x-100 opacity-30 md:block",
  },
  {
    src: storyProps.trees[0].src,
    alt: "",
    width: 100,
    height: 140,
    className: "top-[12%] left-[42%] hidden w-16 -scale-x-100 opacity-20 lg:block",
  },
  // Frame trees
  {
    src: storyProps.trees[0].src,
    alt: "",
    width: 140,
    height: 200,
    className: "-left-8 bottom-28 w-24 md:-left-10 md:bottom-32 md:w-36 lg:w-44",
  },
  {
    src: storyProps.trees[1].src,
    alt: "",
    width: 160,
    height: 220,
    className: "-right-6 bottom-24 w-28 md:-right-8 md:bottom-28 md:w-40 lg:w-48",
  },
  {
    src: storyProps.trees[1].src,
    alt: "",
    width: 120,
    height: 170,
    className: "-left-16 bottom-48 hidden w-20 -scale-x-100 opacity-50 md:block lg:w-28",
  },
  {
    src: storyProps.trees[2].src,
    alt: "",
    width: 130,
    height: 175,
    className: "-right-14 bottom-52 hidden w-20 opacity-45 sm:block md:w-32",
  },
  // Rock scatter — foreground & midground
  {
    src: storyProps.rocks[0].src,
    alt: "",
    width: 64,
    height: 48,
    className: "bottom-36 left-[10%] w-10 md:bottom-40 md:w-14",
  },
  {
    src: storyProps.rocks[0].src,
    alt: "",
    width: 48,
    height: 36,
    className: "bottom-52 left-[2%] w-7 opacity-70 md:bottom-56 md:w-9",
  },
  {
    src: storyProps.rocks[1].src,
    alt: "",
    width: 72,
    height: 52,
    className: "bottom-32 right-[20%] w-11 md:bottom-36 md:w-16",
  },
  {
    src: storyProps.rocks[1].src,
    alt: "",
    width: 56,
    height: 40,
    className: "bottom-44 left-[24%] hidden w-8 opacity-65 sm:block md:w-11",
  },
  {
    src: storyProps.rocks[2].src,
    alt: "",
    width: 48,
    height: 40,
    className: "bottom-40 right-[6%] w-9 sm:w-10 md:w-12",
  },
  {
    src: storyProps.rocks[2].src,
    alt: "",
    width: 40,
    height: 32,
    className: "bottom-48 right-[32%] hidden w-7 opacity-60 md:block md:w-9",
  },
  {
    src: storyProps.rocks[2].src,
    alt: "",
    width: 36,
    height: 28,
    className: "bottom-56 left-[48%] w-6 opacity-50 md:w-8",
  },
  // Lilipod pond line
  {
    src: storyProps.lilipod,
    alt: "",
    width: 56,
    height: 56,
    className: "bottom-44 left-[34%] w-8 opacity-90 md:w-10",
  },
  {
    src: storyProps.lilipod,
    alt: "",
    width: 48,
    height: 48,
    className: "bottom-46 left-[52%] hidden w-7 opacity-80 sm:block md:w-9",
  },
  {
    src: storyProps.lilipod,
    alt: "",
    width: 44,
    height: 44,
    className: "bottom-42 right-[42%] w-6 opacity-75 md:w-8",
  },
  {
    src: storyProps.lilipodFlower,
    alt: "",
    width: 40,
    height: 40,
    className: "bottom-48 right-[36%] w-7 md:w-9",
  },
  {
    src: storyProps.lilipodFlower,
    alt: "",
    width: 36,
    height: 36,
    className: "bottom-50 left-[62%] hidden w-6 opacity-85 sm:block md:w-8",
  },
  {
    src: storyProps.lilipodFlower,
    alt: "",
    width: 32,
    height: 32,
    className: "bottom-54 left-[18%] w-5 opacity-70 md:w-7",
  },
  // Dialogue box trim
  {
    src: storyProps.lilipod,
    alt: "",
    width: 40,
    height: 40,
    className: "bottom-[132px] left-[8%] hidden w-6 opacity-60 md:block md:w-8",
  },
  {
    src: storyProps.lilipodFlower,
    alt: "",
    width: 32,
    height: 32,
    className: "bottom-[128px] right-[10%] hidden w-5 opacity-55 sm:block md:w-7",
  },
] as const;

export const storyBeats = [
  {
    id: "chat",
    speaker: "Chat Thysreal",
    role: "Apprentice druid",
    portrait: characters.chatThysreal,
    side: "left" as const,
    chatLife: 1,
    frogLife: 1,
    text: "You play as Chat Thysreal, an apprentice druid. To become a full-fledged druid, Chat must complete a ritual — but something goes wrong when your mentor suddenly transforms!",
  },
  {
    id: "frog",
    speaker: "Miss Information",
    role: "??? → Giant frog",
    portrait: characters.missInformation,
    side: "right" as const,
    chatLife: 0.72,
    frogLife: 0.95,
    text: "Miss Information becomes a giant frog! With your staff broken, Chat channels magic through a deck of cards — build your loadout, defeat bosses, and face your mentor to turn her back to normal.",
  },
] as const;

export const references = [
  {
    label: "Design document",
    href: "https://docs.google.com/document/d/1FLeypY8NCZpc-R38s-cExGvvbcVhmbUvuWUmB8E7YVE/edit?tab=t.0",
  },
  {
    label: "Canva pitch deck",
    href: "https://www.canva.com/design/DAG-2zcl81M/lxaKsgbRU9z_qh6HfIGbbg/edit",
  },
  {
    label: "itch.io — Ribbeting Rush",
    href: PLAY_URL,
  },
];

export const genreTags = [
  "Boss Rush",
  "Deck Builder",
  "Top-Down Shooter",
  "Card Game",
  "Saferoom",
] as const;

export const mechanics = [
  {
    title: "Dual-hand cards",
    description:
      "Hold two cards at once — one in each hand — and swap between a deck of five unique abilities.",
  },
  {
    title: "Boss rush",
    description:
      "Fight through challenging bosses in a top-down shooter built around pattern reads and deck synergy.",
  },
  {
    title: "Build your deck",
    description:
      "Collect and combine spell cards to power up Chat when the staff is nowhere to be found.",
  },
];

export const coreGameplay = [
  {
    title: "Build a better deck",
    description: "Tune your five-card loadout between fights to match each boss.",
    asset: "/assets/features/deck-building.png",
  },
  {
    title: "Fight the boss",
    description: "Dodge patterns, swap cards mid-fight, and channel druid magic through your deck.",
    asset: "/assets/features/boss-fight.png",
  },
  {
    title: "Climb the leaderboards",
    description: "Push your best runs and compete for the top spot.",
    asset: "/assets/features/leaderboards.png",
  },
];

export const spellCards = [
  {
    name: "Fireball",
    src: "/assets/books/fireball.png",
    description:
      "Hurl a blazing orb that explodes on impact — reliable damage for opening a fight or finishing a pattern window.",
  },
  {
    name: "Hydroslash",
    src: "/assets/books/hydroslash.png",
    description:
      "Sweep a cutting wave of water in front of you, hitting multiple targets in a wide arc.",
  },
  {
    name: "Thorns",
    src: "/assets/books/thorns.png",
    description:
      "Sprout defensive thorns that punish anything that closes in while you reposition.",
  },
  {
    name: "Revitalize",
    src: "/assets/books/revitalize.jpg",
    description:
      "Channel restorative magic to recover health between boss phases or after a risky read.",
  },
  {
    name: "Recall",
    src: "/assets/books/recall.png",
    description:
      "Pull a spent card back into play so you can reuse a key ability sooner than the deck cycle allows.",
  },
  {
    name: "Deflection",
    src: "/assets/books/deflection.png",
    description:
      "Bounce incoming projectiles away from Chat, turning boss patterns back on the attacker.",
  },
  {
    name: "Eruption",
    src: "/assets/books/eruption.png",
    description:
      "Burst magma from the ground beneath your target for heavy area damage after you line up the shot.",
  },
  {
    name: "Bloodwork",
    src: "/assets/books/bloodwork.png",
    description:
      "Sacrifice a little health to fuel a stronger spell — high risk, high reward when the boss is almost down.",
  },
  {
    name: "Gamble",
    src: "/assets/books/gamble.png",
    description:
      "Roll the odds on a random effect that can swing a fight in your favor or backfire if you mistime it.",
  },
  {
    name: "Hat Trick",
    src: "/assets/books/hat-trick.png",
    description:
      "A tricky three-part cast that chains small hits into one big payoff when you land the full combo.",
  },
  {
    name: "Overdrive",
    src: "/assets/books/overdrive.png",
    description:
      "Temporarily speed up card swaps and cooldowns so you can spam your loadout during a damage phase.",
  },
  {
    name: "Shotgun",
    src: "/assets/books/shotgun.png",
    description:
      "Fire a close-range spread of shots — devastating when you dash in, weak at a distance.",
  },
] as const;

export type SpellCard = (typeof spellCards)[number];

export const team = [
  {
    name: "Joshua",
    role: "Head Programmer",
    asset: "/assets/team/joshua.png",
  },
  { name: "Jap", role: "Game Pixel Artist", asset: "/assets/team/jap.png" },
  { name: "Gio", role: "Head Pixel Artist", asset: "/assets/team/gio.png" },
  {
    name: "Ran",
    role: "Producer & Asst. Pixel Artist",
    asset: "/assets/team/ran.png",
  },
  {
    name: "Aori",
    role: "Music & Sound Producer",
    asset: "/assets/team/aori.png",
  },
];

export const techStack = [
  { name: "Godot", asset: "/assets/tech/godot.png" },
  { name: "Aseprite", asset: "/assets/tech/aseprite.png" },
  { name: "Piskel", asset: "/assets/tech/piskel.png" },
  { name: "FL Studio", asset: "/assets/tech/fl-studio.png" },
  { name: "Audacity", asset: "/assets/tech/audacity.png" },
];

export const featureScreens = [
  {
    title: "Card building",
    description: "Craft your loadout before diving into the swamp.",
    asset: "/assets/features/card-building.png",
  },
  {
    title: "Start screen",
    description: "Jump in fast with a clear, arcade-style front end.",
    asset: "/assets/features/start-ui.png",
  },
  {
    title: "In-game HUD",
    description: "Track hands, deck, and boss patterns at a glance.",
    asset: "/assets/features/in-game.png",
  },
];

export const inspirations = [
  { src: "/assets/inspirations/one.png", alt: "Inspiration reference 1" },
  { src: "/assets/inspirations/two.png", alt: "Inspiration reference 2" },
  { src: "/assets/inspirations/three.png", alt: "Inspiration reference 3" },
  { src: "/assets/inspirations/four.png", alt: "Inspiration reference 4" },
  { src: "/assets/inspirations/five.png", alt: "Inspiration reference 5" },
] as const;
