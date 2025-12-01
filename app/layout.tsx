import { Button } from "@/components/ui/button"; // Import Button
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Import Link
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
        <nav className="flex justify-center space-x-4 py-4 border-b">
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/about">About</Link>
          </Button>
        </nav>
        {children}
      </body>
    </html>
  );
}
