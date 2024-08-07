import Footer from "~/components/layout/footer/footer";
import Navbar from "~/components/layout/navbar/navbar";
import GotoTop from "~/components/miscellaneous/goto-top";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      {/* NAV-BAR */}
      <Navbar />
      <div className="mx-auto mt-[95px] w-11/12 2xl:container">{children}</div>
      <Footer />
      {/* FOOTER */}
      <GotoTop />
    </div>
  );
}
