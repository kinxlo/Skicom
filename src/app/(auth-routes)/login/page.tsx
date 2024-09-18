"use client";

/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Step1 } from "~/components/auth/signin/step1";
import { Step2 } from "~/components/auth/signin/step2";
import { Inputs } from "~/types/auth.types";

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<Inputs>();
  // const { status, data: session } = useSession();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmitSignIn: SubmitHandler<Inputs> = async (form) => {
    console.log(form);

    try {
      const response = await signIn("credentials", {
        email: form.email,
        password: form.passcode,
        redirect: false,
      });

      if (response?.error) {
        return;
      }

      // console.log(response);

      router.replace("/");
    } catch (error) {
      console.error("Sign-in error", error);
    }
  };

  switch (currentStep) {
    case 1: {
      {
        return (
          <Step1
            nextStep={nextStep}
            register={register}
            errors={errors}
            isValid={isValid}
          />
        );
      }
    }
    case 2: {
      {
        return (
          <Step2
            previousStep={previousStep}
            register={register}
            onSubmitSignIn={onSubmitSignIn}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            control={control}
          />
        );
      }
    }

    default: {
      return (
        <Step1
          nextStep={nextStep}
          register={register}
          errors={errors}
          isValid={isValid}
        />
      );
    }
  }
};
export default page;
