import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-pixel-body",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ribbeting Rush!",
  description:
    "A top-down boss-rush deck-builder shooter. Play as Chat Thysreal, apprentice druid — defeat bosses with magic cards and save your mentor from a giant frog.",
  openGraph: {
    title: "Ribbeting Rush!",
    description:
      "Boss rush. Deck builder. Top-down shooter. Built by L.E.G.O B.A.T.M.A.N for Funcom2.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-pixel-body text-pixel-body">
        {children}
      </body>
    </html>
  );
}
