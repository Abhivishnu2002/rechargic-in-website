import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rechargic | Future of Smart Payments",
  description: "Experience the next generation of utility payments. Secure, fast, and intelligent recharge ecosystem for the modern world.",
  keywords: ["recharge", "bill payments", "fintech", "smart payments", "rechargic"],
  openGraph: {
    title: "Rechargic | Future of Smart Payments",
    description: "Experience the next generation of utility payments.",
    type: "website",
    url: "https://rechargic.in",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
