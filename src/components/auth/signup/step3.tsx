import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import CustomButton from "~/components/common/common-button/common-button";
import { AuthWrapper } from "~/components/layout/wrapper/auth-wrapper";
import { Input } from "~/components/ui/input";
import { SignupInputs } from "~/types/auth.types";

type PreviousStepType = {
  previousStep: () => void;
  nextStep: () => void;
  register: UseFormRegister<SignupInputs>;
  onSubmitSignIn: SubmitHandler<SignupInputs>;
  handleSubmit: UseFormHandleSubmit<SignupInputs, undefined>;
  errors: FieldErrors<SignupInputs>;
  isValid: boolean;
};

export const Step3 = ({
  // previousStep,
  register,
  // handleSubmit,
  // onSubmitSignIn,
  nextStep,
  errors,
  isValid,
}: PreviousStepType) => {
  return (
    <AuthWrapper>
      <div className="mt-3">
        <p className="text-[20px] font-semibold">
          Your Full Name and Email Address
        </p>
        <p className="pb-2 text-[14px] text-[#6B6B6B]">
          Enter your full name and email address to create your profile.
        </p>

        <section className="mt-4">
          <div className="flex items-center justify-between gap-7">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[14px] text-neutral-dark-2"
              >
                First Name
              </label>
              <Input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
              />

              {errors.firstName && (
                <p className="text-[12px] text-red-500">
                  Please input your firstName
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-[14px] text-neutral-dark-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
              />

              {errors.lastName && (
                <p className="text-[12px] text-red-500">
                  Please input your lastName
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              className="mt-4 block text-[14px] text-neutral-dark-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <p className="text-[12px] text-red-500">
                Please input your email
              </p>
            )}
          </div>
        </section>

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
