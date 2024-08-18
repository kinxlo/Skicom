import LenisProvider from "~/components/LenisProvider";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LenisProvider>{children}</LenisProvider>;
}
