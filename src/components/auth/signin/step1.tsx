import Link from "next/link";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import { AuthWrapper } from "~/components/layout/wrapper/auth-wrapper";
import { Input } from "~/components/ui/input";
import { Inputs } from "~/types/auth.types";

type step1Tyes = {
  nextStep: () => void;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  isValid: boolean;
};

export const Step1 = ({ nextStep, register, errors, isValid }: step1Tyes) => {
  return (
    <AuthWrapper>
      <p className="text-[24px] font-semibold">Welcome Back</p>
      <p className="mt-1 text-[14px] text-[#6B6B6B]">
        Enter your email address to access your account.
      </p>

      <div className="mt-4">
        <label htmlFor="email" className="text-[14px] text-neutral-dark-2">
          Email
        </label>
        <Input
          type="email"
          id="email"
          className="border"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <p className="text-[12px] text-red-500">
            Please input your email address
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <CustomButton
          className="w-full rounded-full py-5"
          variant="primary"
          isDisabled={!isValid}
          onClick={nextStep}
        >
          Continue
        </CustomButton>

        <div className="mt-2">
          <Link
            href={"/forgot-email"}
            className="text-center text-[14px] text-primary"
          >
            Forgot Email?
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};
