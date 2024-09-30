import type { Metadata } from "next";
import { Russo_One, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./navigation";

const russoOne = Russo_One({
  weight: '400',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-russo-one',
});

const inter = Inter({
  style: ['normal', 'italic'],
  weight: ['400', '700', '800'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Анкета за Буџет 2025 – Општина Ѓорче Петров",
  description: "Вклучи се во процесот на креирање на Буџетот за 2025 година на Општина Ѓорче Петров. Одговори на прашалникот и помогни во развојот на нашата заедница.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${russoOne.variable} ${inter.variable} font-body min-h-dvh`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
