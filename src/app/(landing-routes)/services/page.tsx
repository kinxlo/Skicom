// components/Blob.js

import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";
import Coverage from "~/components/services/coverage";
import DataAirtime from "~/components/services/data-airtime";
import coverage from "../../../../public/images/services/coverage.png";
import network from "../../../../public/images/services/network.png";
import reliability from "../../../../public/images/services/reliability.png";
import speed from "../../../../public/images/services/speed.png";

const Page = () => {
  return (
    <main>
      <div className="flex h-[350px] w-full items-center justify-center bg-[url('/images/services/hero.png')] bg-center bg-no-repeat lg:h-[510px] xl:bg-cover">
        <div className="mt-[100px] lg:mt-0">
          <h3 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
            Services
          </h3>

          <BreadCrumb />
        </div>
      </div>

      <section className="relative bg-[#FFFFFF]">
        <Wrapper>
          <div className="mx-auto py-10 lg:mt-[30px]">
            <div className="mx-auto max-w-[1000px] text-center">
              <h3 className="text-[17px] font-semibold text-neutral-dark-2 xl:text-[27px]">
                Our Services
              </h3>
              <p className="my-2 text-[28px] font-semibold leading-[44px] text-neutral-dark-1 lg:text-[44px] xl:leading-[39px]">
                Experience Superior Network Services
              </p>
              <p className="mx-auto max-w-[792px] text-[17px] leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
                venenatis feugiat lacus. Elit tellus morbi quis a aliquam.
              </p>
            </div>

            <section className="mt-8 items-center justify-between space-y-10 lg:flex lg:space-y-0">
              <div className="relative text-center">
                <BlurImage
                  src={speed}
                  alt="speed-services-img"
                  className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
                />
                <h4 className="mb-1 text-[24px] text-neutral-dark-1 xl:text-[28px]">
                  Speed
                </h4>
                <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                  Our network offers high-speed internet with various options to
                  meet your needs.
                </p>
              </div>

              <div className="relative text-center">
                <BlurImage
                  src={coverage}
                  alt="coverage-services-img"
                  className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
                />
                <h4 className="mb-1 text-[24px] text-neutral-dark-1 xl:text-[28px]">
                  Coverage
                </h4>
                <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                  We provide extensive coverage across the country, ensuring you
                  stay connected wherever you go.
                </p>
              </div>

              <div className="relative text-center">
                <BlurImage
                  src={reliability}
                  alt="reliability-services-img"
                  className="animate-sway relative mx-auto mb-4 h-48 w-48 rounded-full"
                />
                <h4 className="mb-1 text-[24px] text-neutral-dark-1 xl:text-[28px]">
                  Reliability
                </h4>
                <p className="mx-auto max-w-[340px] text-[17px] xl:text-[20px]">
                  Our network is built with the latest technology to offer a
                  stable and reliable connection at all times.
                </p>
              </div>
            </section>
          </div>
        </Wrapper>

        <div className="absolute bottom-5 right-0 hidden lg:block">
          <BlurImage src={network} alt="network-design-left" />
        </div>
      </section>

      <Coverage />
      <DataAirtime />

      <Wrapper>
        <Testimonial />
      </Wrapper>
    </main>
  );
};

export default Page;
