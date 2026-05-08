import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FF4757",
  viewportFit: "cover",
};

const siteUrl = "https://duovictims.vercel.app";

export const metadata: Metadata = {
  title: "DuoVictims — Set Yourself Free from Duolingo",
  description:
    "Track your days of freedom since quitting Duolingo. Collect trophies, maintain your streak, and celebrate your escape on The Great Escape Route!",
  keywords: [
    "Duolingo",
    "quit Duolingo",
    "streak tracker",
    "freedom counter",
    "language learning",
    "DuoVictims",
    "Duolingo alternative",
  ],
  authors: [{ name: "DuoVictims" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/duovictims-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/duovictims-favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/duovictims-512.png", sizes: "512x512" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "DuoVictims — Set Yourself Free",
    description:
      "Track your days of freedom since quitting Duolingo. How long can you resist the owl?",
    url: siteUrl,
    siteName: "DuoVictims",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icons/duovictims-512.png",
        width: 512,
        height: 512,
        alt: "DuoVictims — Set Yourself Free from Duolingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoVictims — Set Yourself Free",
    description:
      "Track your days of freedom since quitting Duolingo. Collect trophies and celebrate!",
    images: ["/icons/duovictims-512.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/duovictims-512.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DuoVictims" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-poppins), "Segoe UI", sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
