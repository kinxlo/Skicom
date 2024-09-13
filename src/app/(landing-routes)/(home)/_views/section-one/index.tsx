import { Banknote, Headphones } from "lucide-react";

import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";

export const SectionOne = () => {
  return (
    <Wrapper className="py-[50px] text-center lg:py-[87px]">
      <p className="mx-auto w-fit text-[27px] font-semibold text-neutral-dark-2">
        Welcome to SKICOM
      </p>

      <h2 className="mx-auto my-[25px] w-fit text-2xl font-semibold text-neutral-dark-1 lg:max-w-full lg:text-[44px]">
        A Single Sign-in To Your Digital World
      </h2>
      <p className="mx-auto max-w-[700px] text-lg font-medium lg:text-xl">
        Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
        feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
        Duis posuere venenatis et amet sed.{" "}
      </p>

      <section className="mt-10 items-center justify-center text-start lg:flex">
        <div className="rate flex h-[300px] w-full flex-col rounded-bl-xl rounded-tl-xl px-7">
          <Banknote color="#007CC3" className="mt-10" size={45} />

          <div>
            <h5 className="my-2 text-3xl font-semibold text-neutral-dark-2">
              Affordable Rates
            </h5>
            <p className="mt-4 max-w-[400px] text-xl">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.{" "}
            </p>
          </div>
        </div>

        <div className="relative flex h-[300px] w-full flex-col bg-[url('/images/about/hero.png')] bg-cover bg-no-repeat px-7">
          <Headphones color="white" className="mt-10" size={45} />
          <div>
            <h5 className="my-2 text-3xl font-semibold text-white">
              24/7 Support
            </h5>
            <p className="mt-4 max-w-[400px] text-xl text-white">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.{" "}
            </p>
          </div>

          <BlurImage
            width={84}
            height={84}
            src="/images/home/supportRing.png"
            alt="offer"
            className="absolute right-0 top-0 rounded-lg"
          />
        </div>

        <div className="payment flex h-[300px] w-full flex-col rounded-br-xl rounded-tr-xl px-7">
          <Banknote color="#007CC3" className="mx-7 mt-10" size={45} />
          <div>
            <h5 className="my-2 text-3xl font-semibold text-neutral-dark-2">
              Secure Payments
            </h5>
            <p className="mt-4 max-w-[400px] text-xl">
              Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
              feugiat lacus.{" "}
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
