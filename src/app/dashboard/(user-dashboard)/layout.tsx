import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <div className="relative w-full bg-white px-2 max-lg:overflow-hidden xl:px-4">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
