import Hero from "~/components/home/hero";

import "./../../../components/home/home.css";

import { Banknote, Headphones } from "lucide-react";

import Testimonial from "~/components/common/testimonial/testimonial";
import Offers from "~/components/home/offers";
import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";

function page() {
  return (
    <section>
      <div className={`bg-subtle`}>
        <Hero />
      </div>
      <Wrapper>
        <section>
          <div className="py-10 text-center">
            {/* Welcome To SKICOM */}
            <h2 className="text-2xl font-semibold text-neutral-dark-2">
              Welcome to SKICOM
            </h2>

            <h4 className="mx-auto mt-3 max-w-[250px] text-2xl font-semibold text-neutral-dark-1 lg:max-w-full lg:text-[44px]">
              A Single Sign-in To Your Digital World
            </h4>
            <p className="mx-auto mt-5 max-w-[700px] text-lg font-medium lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.{" "}
            </p>

            <section className="mt-10 items-center justify-center text-start lg:flex">
              <div className="rate flex h-[300px] w-full flex-col rounded-bl-xl rounded-tl-xl px-7">
                <Banknote color="#007CC3" className="mt-10" size={45} />

                <div>
                  <h5 className="my-2 text-3xl font-semibold text-neutral-dark-2">
                    Affordable Rates
                  </h5>
                  <p className="mt-4 max-w-[400px] text-xl">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut
                    ventis feugiat lacus.{" "}
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
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut
                    ventis feugiat lacus.{" "}
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
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut
                    ventis feugiat lacus.{" "}
                  </p>
                </div>
              </div>
            </section>
            {/* Welcome To SKICOM */}
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <section className="relative py-5 xl:py-14">
          {/* Welcome To SKICOM */}
          <div className="text-center">
            <h4 className="text-[15px] font-semibold text-neutral-dark-2 lg:text-sm">
              What We Do At SKICOM
            </h4>
            <p className="mt-3 text-[28px] text-xl font-semibold text-neutral-dark-1">
              We Are Offering The Best Services
            </p>
          </div>

          <section className="mt-5 items-center justify-between lg:flex xl:mt-20">
            <div className="flex flex-col gap-7">
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <BlurImage
                width={14}
                height={14}
                src="/images/home/center-offer.png"
                alt="center-offer-img"
                className="h-[420px] w-[400px]"
              />
            </div>

            <div className="mt-5 flex flex-col gap-7 xl:mt-0">
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <BlurImage
                  width={14}
                  height={14}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-lg">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="absolute right-0 top-0">
            {/* <Image
              width={14}
              height={14}
              src="/images/home/offer.png"
              alt="offer-img"
              className="h-[350px] w-[500px]"
            /> */}
          </div>
        </section>
      </Wrapper>

      <div>
        <Offers />
      </div>

      <Wrapper>
        <Testimonial />
      </Wrapper>
    </section>
  );
}
export default page;
