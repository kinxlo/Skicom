import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useEffect, useState } from "react";
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

export const Step2 = ({
  // previousStep,
  // register,
  // handleSubmit,
  // onSubmitSignIn,
  nextStep,
  errors,
  isValid,
  control,
}: PreviousStepType) => {
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState(59);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((previousTime) => previousTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [isTimerActive, timeLeft]);

  const handleResendCode = () => {
    setTimeLeft(59);
    setIsTimerActive(true);
    // Add  ( API call)
  };

  return (
    <AuthWrapper>
      <div className="mt-3">
        <p className="text-[20px] font-semibold">Verify Your Phone Number</p>
        <p className="pb-2 text-[14px] text-[#6B6B6B]">
          We have just sent you a 6 digit code. Check your messages and enter it
          here.
        </p>

        <div className="mt-4">
          <Controller
            name="verifyPhoneNumber"
            control={control}
            rules={{
              required: "Number verification required",
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

          {errors.verifyPhoneNumber && (
            <p className="text-[12px] text-red-500">
              Please input your passcode
            </p>
          )}

          <div className="mt-2 flex items-center justify-between">
            <p className="text-[14px] text-[#FF3D00]">
              Expires {timeLeft < 10 ? `00:0${timeLeft}` : `00:${timeLeft}`}
            </p>
            <button
              className="text-[14px] text-[#9D9D9D]"
              onClick={handleResendCode}
              disabled={isTimerActive}
            >
              Resend code
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <CustomButton
            className="w-full rounded-full py-5"
            variant="primary"
            isDisabled={!isValid}
            onClick={nextStep}
          >
            Continue
          </CustomButton>
        </div>
      </div>
    </AuthWrapper>
  );
};
