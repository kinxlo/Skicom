import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "~/components/layout/footer/footer";
import Navbar from "~/components/layout/navbar/navbar";
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
          {/* <Navbar /> */}
          <Providers />
          {children}
          <Toaster />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
