import { InitEventTracker } from "@/amplitude/InitEventTracker";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jisu Bong",
  description: "Jisu Bong's Personal Website",
  openGraph: {
    title: "Jisu Bong",
    description: "Jisu Bong's Personal Website - Frontend Developer Portfolio",
    url: "https://jisu-bong.com",
    siteName: "Jisu Bong Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jisu Bong",
    description: "Jisu Bong's Personal Website - Frontend Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitEventTracker />
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
