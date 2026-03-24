import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Webistan.it | Software, Hardware & IT Infrastructure Partner",
  description:
    "Webistan.it delivers custom software, hardware procurement, infrastructure rollout, deployment, maintenance, and long-term B2B technology support.",
  metadataBase: new URL("https://webistan.it"),
  openGraph: {
    title: "Webistan.it",
    description:
      "A trusted B2B technology partner for software delivery, hardware rollout, infrastructure, and support.",
    url: "https://webistan.it",
    siteName: "Webistan.it",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Webistan.it",
    description:
      "Software, hardware, infrastructure, deployment, and support under one roof."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${sora.variable} font-sans bg-white text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
