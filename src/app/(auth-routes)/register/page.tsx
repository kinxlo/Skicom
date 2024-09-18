/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Step1 } from "~/components/auth/signup/step1";
import { Step2 } from "~/components/auth/signup/step2";
import { Step3 } from "~/components/auth/signup/step3";
import { Step4 } from "~/components/auth/signup/step4";
import { Step5Success } from "~/components/auth/signup/step5-success";
import { Step6 } from "~/components/auth/signup/step6";
import { SignupInputs } from "~/types/auth.types";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignupInputs>();
  // const { status, data: session } = useSession();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [value, setValue] = useState<string | undefined>();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRegister: SubmitHandler<SignupInputs> = async (form) => {
    try {
      const response = await axios.post(
        "https://curaflux-server.onrender.com/auth/signup",
        {
          phoneNumber: value,
          password: form.passcode,
          verifyPhoneNumber: form.verifyPhoneNumber,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          passcode: form.passcode,
          transcationPin: form.transcationPin,
        },
      );
      console.log(response);

      if (response.status === 201) {
        nextStep();
      }

      // router.replace("/");
    } catch (error) {
      console.log(error);
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
            value={value}
            setValue={setValue}
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
            onSubmitSignIn={handleRegister}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            nextStep={nextStep}
            control={control}
          />
        );
      }
    }

    case 3: {
      {
        return (
          <Step3
            previousStep={previousStep}
            nextStep={nextStep}
            register={register}
            onSubmitSignIn={handleRegister}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
          />
        );
      }
    }

    case 4: {
      {
        return (
          <Step4
            previousStep={previousStep}
            nextStep={nextStep}
            register={register}
            onSubmitSignIn={handleRegister}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            control={control}
          />
        );
      }
    }

    case 5: {
      {
        return <Step5Success nextStep={nextStep} />;
      }
    }

    case 6: {
      {
        return (
          <Step6
            previousStep={previousStep}
            nextStep={nextStep}
            register={register}
            onSubmitSignIn={handleRegister}
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
          value={value}
          setValue={setValue}
        />
      );
    }
  }
};

export default page;
