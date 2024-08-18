import Footer from "~/components/layout/footer/footer";
import Navbar from "~/components/layout/navbar/navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      <div className="mt-[95px]">{children}</div>
      <Footer />
    </div>
  );
}
