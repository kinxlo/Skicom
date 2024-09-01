import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import LenisProvider from "~/components/lenis-provider";
import GotoTop from "~/components/miscellaneous/goto-top";
import Progress_Bar from "~/components/progress-bar";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Skycom",
  description: "Skycom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GotoTop />
        <LenisProvider>
          <main>
            <Progress_Bar />
            {children}
            <Toaster />
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
