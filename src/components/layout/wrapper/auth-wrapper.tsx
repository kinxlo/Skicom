import { ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-[375px] px-3 py-14">{children}</div>;
};
