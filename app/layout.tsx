import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulsar — Game Engine",
  description: "A next-generation game engine built in Rust. High performance, visual scripting, open source.",
  icons: {
    icon: '/logos/pulsar.png',
    shortcut: '/logos/pulsar.png',
    apple: '/logos/pulsar.png',
  },
  openGraph: {
    title: "Pulsar Game Engine",
    description: "A next-generation game engine built entirely in Rust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
