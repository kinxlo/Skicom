// import "./home.css";

import Image from "next/image";
import Link from "next/link";

import CustomButton from "../common/common-button/common-button";
import { Wrapper } from "../layout/wrapper";
import BlurImage from "../miscellaneous/blur-image";

// import { Wrapper } from "../layout/wrapper";

// import BlurImage from "../miscellaneous/blur-image";

const Hero = () => {
  return (
    <section>
      <section className="relative">
        <div className="bg-[100%] bg-no-repeat lg:bg-[url('/images/home/Hero.png')]">
          <Wrapper className="flex h-[500px] items-center justify-center lg:h-[730px] lg:justify-start">
            <div className="relative max-w-[686px] text-center lg:text-left">
              <h1 className="text-[32px] font-bold leading-[44px] text-neutral-dark-1 lg:text-[56px] lg:leading-[78px]">
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
                className="absolute left-[-1rem] top-[-3rem] lg:left-[-2rem] lg:top-[-2rem]"
              />
            </div>
          </Wrapper>
        </div>
        <Link href={"/contact"}>
          <BlurImage
            className={`absolute bottom-3 right-12`}
            width={120}
            height={50}
            src={`/images/home/help.png`}
            alt="help"
          />
        </Link>
      </section>
    </section>
  );
};

export default Hero;
