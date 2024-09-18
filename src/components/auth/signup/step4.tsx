import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import { AuthWrapper } from "~/components/layout/wrapper/auth-wrapper";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { SignupInputs } from "~/types/auth.types";

type PreviousStepType = {
  previousStep: () => void;
  nextStep: () => void;
  register: UseFormRegister<SignupInputs>;
  onSubmitSignIn: SubmitHandler<SignupInputs>;
  handleSubmit: UseFormHandleSubmit<SignupInputs, undefined>;
  errors: FieldErrors<SignupInputs>;
  isValid: boolean;
  control: Control<SignupInputs, unknown>;
};

export const Step4 = ({
  previousStep,
  // register,
  handleSubmit,
  onSubmitSignIn,
  errors,
  isValid,
  // nextStep,
  control,
}: PreviousStepType) => {
  return (
    <AuthWrapper>
      <div>
        <button onClick={previousStep}>
          <MoveLeft />
        </button>
      </div>

      <div className="mt-3">
        <p className="text-center text-[20px] font-semibold">
          Enter Your Passcode
        </p>
        <p className="pb-2 text-center text-[14px] text-[#6B6B6B]">
          Enter your 6 digit passcode
        </p>
        <form action="" onSubmit={handleSubmit(onSubmitSignIn)}>
          <div className="flex flex-col items-center justify-center">
            <Controller
              name="passcode"
              control={control}
              rules={{
                required: "Passcode is required",
                minLength: 6,
                maxLength: 6,
              }}
              render={({ field }) => (
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  className="flex w-full justify-center"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />

            {errors.passcode && (
              <p className="text-[12px] text-red-500">
                Please input your passcode
              </p>
            )}
          </div>

          <div className="mt-10 text-center">
            <CustomButton
              className="w-full rounded-full py-5"
              variant="primary"
              isDisabled={!isValid}
              // onClick={nextStep}
            >
              Continue
            </CustomButton>

            <div className="mt-2">
              <Link
                href={"/forgot-email"}
                className="text-center text-[14px] text-primary"
              >
                Forgot Passcode?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};
