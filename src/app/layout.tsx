import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import sharp from "sharp";
import Header from "@/components/Header";
import { GlobalProvider } from "../globalContext/context";

sharp.simd(false);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autonoma Industriale",
  description: " ",
  keywords: [
    "berlin",
    "industrial",
    "noise",
    "punk",
    "industrial music",
    "event",
    "events",
  ],
  icons: "/icons/icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          <div id="pagebody">{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
