import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer, SponsorsButton } from "@/components/layout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pulsar Game Engine",
  description: "A next generation game engine implemented in Rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-darkreader-ignore>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-darkreader-ignore
      >
        <Header />
        {children}
        <Footer />
        <SponsorsButton />
      </body>
    </html>
  );
}
