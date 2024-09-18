// import onboardImage from "../../../public/images/auth/onboardImage.png";
"use client";

import { useRouter } from "next/navigation";

import CustomButton from "../common/common-button/common-button";
import { AuthWrapper } from "../layout/wrapper/auth-wrapper";
import BlurImage from "../miscellaneous/blur-image";

export const Onboarding = () => {
  const router = useRouter();

  return (
    <AuthWrapper>
      <div>
        <BlurImage
          src={"/images/auth/onboardImage.png"}
          className="mx-auto h-[315px] w-[324px]"
          width={45}
          height={45}
          alt="Onboarding-image"
        />
      </div>

      <div>
        <h3 className="text-center text-[22px] font-bold text-neutral-dark-2">
          The No. 1 Solution for Network Services and Bill Payments
        </h3>
        <p className="mt-6 text-center text-[16px] text-[#5C5C5C]">
          Experience unparalleled convenience with our top-rated solution for
          seamless network services and bill payments.
        </p>
      </div>

      <div className="mt-20 flex w-full flex-col space-y-3">
        <CustomButton
          className="rounded-full bg-[#007CC3] py-2 text-white"
          onClick={() => router.replace("/login")}
        >
          Login
        </CustomButton>
        <CustomButton
          className="rounded-full border border-[#007CC3] py-2"
          onClick={() => router.replace("/register")}
        >
          Register
        </CustomButton>
      </div>
    </AuthWrapper>
  );
};
