"use client";

import { signOut } from "next-auth/react";

import CustomButton from "~/components/common/common-button/common-button";

const page = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold"> User Dashboard</h1>

        <CustomButton
          variant="primary"
          className="mt-10 hidden h-[46px] rounded-full xl:block"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Sign out
        </CustomButton>
      </div>
    </main>
  );
};

export default page;
