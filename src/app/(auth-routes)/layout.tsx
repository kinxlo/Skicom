"use client";

import { useRouter } from "next/navigation";

import CustomButton from "~/components/common/common-button/common-button";

const Layout = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-6 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">
          🚧 Page Under Construction
        </h1>
        <p className="text-lg text-gray-700">
          This page is still in development mode. Please check back later!
        </p>
        <CustomButton
          onClick={() => router.back()}
          className="mt-6 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Go Back
        </CustomButton>
      </div>
    </div>
  );
};

export default Layout;
