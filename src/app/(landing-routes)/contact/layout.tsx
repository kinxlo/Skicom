import LenisProvider from "~/components/LenisProvider";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LenisProvider>{children}</LenisProvider>;
}
