"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import { AuthWrapper } from "~/components/layout/wrapper/auth-wrapper";
import { SignupInputs } from "~/types/auth.types";

import "react-phone-number-input/style.css";

import { Dispatch, SetStateAction } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";

type step1Tyes = {
  nextStep: () => void;
  register: UseFormRegister<SignupInputs>;
  errors: FieldErrors<SignupInputs>;
  isValid: boolean;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
};

export const Step1 = ({ nextStep, errors, value, setValue }: step1Tyes) => {
  return (
    <AuthWrapper>
      <p className="text-[24px] font-semibold">What’s Your Phone Number?</p>
      <p className="mt-1 text-[14px] text-[#6B6B6B]">
        Enter the phone number you want to use for this account.
      </p>

      <div className="mt-4">
        <label htmlFor="email" className="text-[14px] text-neutral-dark-2">
          Phone number
        </label>

        <PhoneInputWithCountrySelect
          defaultCountry="NG"
          value={value}
          onChange={setValue}
          className="rounded-md border border-primary p-2"
        />

        {errors.phoneNumber && (
          <p className="text-[12px] text-red-500">
            Please input your phone number
          </p>
        )}
      </div>

      <div className="mt-8 text-center">
        <CustomButton
          className="w-full rounded-full py-5"
          variant="primary"
          isDisabled={!value}
          onClick={nextStep}
        >
          Continue
        </CustomButton>
      </div>
    </AuthWrapper>
  );
};
