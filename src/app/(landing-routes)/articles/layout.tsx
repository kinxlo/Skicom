import LenisProvider from "~/components/LenisProvider";

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LenisProvider>{children}</LenisProvider>;
}
