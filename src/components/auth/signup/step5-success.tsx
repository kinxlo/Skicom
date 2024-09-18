import CustomButton from "~/components/common/common-button/common-button";
import { AuthWrapper } from "~/components/layout/wrapper/auth-wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";

type step5Types = {
  nextStep: () => void;
};

export const Step5Success = ({ nextStep }: step5Types) => {
  return (
    <AuthWrapper>
      <section className="mt-20 text-center">
        <BlurImage
          src={"/images/auth/success.png"}
          width={90}
          height={90}
          alt="profile-created-image"
          className="mx-auto h-[142px] w-[142px]"
        />

        <h3 className="text-[28px] font-semibold text-neutral-dark-2">
          Profile Created
        </h3>
        <p className="text-[16px] text-[#6B6B6B]">
          Congrats! Your profile has been created
        </p>

        <CustomButton
          variant="primary"
          size="lg"
          className="mt-48 w-full rounded-full py-3"
          onClick={nextStep}
        >
          Next
        </CustomButton>
      </section>
    </AuthWrapper>
  );
};
