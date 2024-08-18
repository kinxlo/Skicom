import CustomButton from "../common/common-button/common-button";

import "./home.css";

import Image from "next/image";

import arrow from "../../../public/images/home/arrow.png";
import wifi from "../../../public/images/home/wifi.png";

const Hero = () => {
  return (
    <main className="mx-auto w-11/12 2xl:container">
      <section className="hero-img relative -mt-24 hidden md:block">
        <div className="pt-40">
          <div className="relative w-[450px]">
            <h3 className="max-w-[430px] text-4xl font-bold text-neutral-dark-1">
              Get Connected With Us & Stay Connected
            </h3>

            <CustomButton className="mt-8 rounded-full" variant="primary">
              Sign Up With Skicom
            </CustomButton>

            <div className="absolute -left-10 -top-10">
              <Image src={wifi} alt="hero-wifi" className="h-[50px] w-[50px]" />
            </div>

            <div className="absolute -bottom-14 right-40">
              <Image
                src={arrow}
                alt="hero-wifi"
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>
        <a className="help absolute bottom-3 right-12" href="/contact"></a>
      </section>

      <section className="relative lg:hidden">
        <div className="pb-20 pt-10">
          <div className="relative w-full">
            <h3 className="max-w-[330px] text-3xl font-bold text-neutral-dark-1">
              Get Connected With Us & Stay Connected
            </h3>
            <div className="text-center">
              <CustomButton
                className="mt-3 rounded-full text-center"
                variant="primary"
                size="lg"
              >
                Sign Up With Skicom
              </CustomButton>
            </div>

            <div className="absolute -left-3 -top-10">
              <Image src={wifi} alt="hero-wifi" className="h-[40px] w-[40px]" />
            </div>

            <div className="absolute -bottom-8 right-0">
              <Image
                src={arrow}
                alt="hero-wifi"
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>
        <a className="help absolute -bottom-5 right-6" href="/contact"></a>
      </section>
    </main>
  );
};

export default Hero;
