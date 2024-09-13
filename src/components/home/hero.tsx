import Image from "next/image";
import Link from "next/link";

import CustomButton from "../common/common-button/common-button";
import { Wrapper } from "../layout/wrapper";
import BlurImage from "../miscellaneous/blur-image";

const Hero = () => {
  return (
    <section className="bg-subtle">
      <div className="lg:pt-0">
        <Wrapper className="relative flex h-[400px] items-center justify-center pt-14 lg:h-[730px] lg:justify-start">
          <div className="relative z-10 mx-auto w-[730px] xl:mx-0">
            <h1 className="mt-10 text-[32px] font-bold leading-[44px] text-neutral-dark-1 lg:mt-0 lg:text-[56px] lg:leading-[78px]">
              Get Connected With Us & Stay Connected
            </h1>

            <CustomButton
              className="mt-8 h-[46px] w-[220px] rounded-full"
              variant="primary"
            >
              Sign Up With Skicom
            </CustomButton>

            <Image
              width={50}
              height={50}
              src={"/images/home/wifi.png"}
              alt="hero-wifi"
              className="absolute left-[-1rem] top-[-0.5rem] lg:left-[-2rem] lg:top-[-2rem]"
            />
          </div>
          <Link href={"/contact"} className="hidden lg:block">
            <BlurImage
              className="absolute bottom-[30px] right-0 z-10"
              width={170}
              height={50}
              src={`/images/home/help.png`}
              alt="help"
            />
          </Link>
          <BlurImage
            className="absolute bottom-0 right-0 hidden xl:block"
            width={1440}
            height={800}
            src={`/images/home/Hero.png`}
            alt="help"
            unoptimized
          />
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;
