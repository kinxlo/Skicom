import LenisProvider from "~/components/LenisProvider";

export default function CustomerCareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LenisProvider>{children}</LenisProvider>;
}
