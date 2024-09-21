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
      <div className="mx-auto h-[350px] w-full bg-[url('/images/services/hero.png')] bg-cover bg-no-repeat lg:h-[400px]">
        <h3 className="pt-48 text-center text-3xl font-semibold text-white lg:pt-44 lg:text-5xl">
          Services
        </h3>

        <BreadCrumb />
      </div>

      <section className="relative bg-[#FFFFFF]">
        <Wrapper>
          <div className="mx-auto py-10 lg:mt-[30px]">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-semibold text-neutral-dark-2">
                Our Services
              </h3>
              <p className="text-[28px] text-[44px] font-bold text-neutral-dark-1">
                Experience Superior Network Services
              </p>
              <p className="mx-auto max-w-2xl text-xl">
                Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
                venenatis feugiat lacus. Elit tellus morbi quis a aliquam.
              </p>
            </div>

            <section className="mt-8 items-center justify-between space-y-10 lg:flex lg:space-y-0">
              <div className="text-center">
                <BlurImage
                  src={speed}
                  alt="speed-services-img"
                  className="mx-auto mb-4 h-48 w-48"
                />
                <h4 className="mb-1 font-semibold text-neutral-dark-1">
                  speed
                </h4>
                <p className="mx-auto max-w-[340px] text-lg">
                  Our network offers high-speed internet with various options to
                  meet your needs.
                </p>
              </div>

              <div className="text-center">
                <BlurImage
                  src={coverage}
                  alt="coverage-services-img"
                  className="mx-auto mb-4 h-48 w-48"
                />
                <h4 className="mb-1 font-semibold text-neutral-dark-1">
                  Coverage
                </h4>
                <p className="mx-auto max-w-[340px] text-lg">
                  We provide extensive coverage across the country, ensuring you
                  stay connected wherever you go.
                </p>
              </div>

              <div className="text-center">
                <BlurImage
                  src={reliability}
                  alt="reliability-services-img"
                  className="mx-auto mb-4 h-48 w-48"
                />
                <h4 className="mb-1 font-semibold text-neutral-dark-1">
                  Reliability
                </h4>
                <p className="mx-auto max-w-[340px] text-lg">
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
