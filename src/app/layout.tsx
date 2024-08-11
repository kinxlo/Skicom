import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import GotoTop from "~/components/miscellaneous/goto-top";
import Providers from "~/components/providers";
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
        <div className="">
          <GotoTop />
          <Providers />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
