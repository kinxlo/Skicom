import Image from "next/image";

import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import Coverage from "~/components/services/coverage";
import DataAirtime from "~/components/services/data-airtime";
import coverage from "../../../../public/images/services/coverage.png";
import network from "../../../../public/images/services/network.png";
import reliability from "../../../../public/images/services/reliability.png";
import speed from "../../../../public/images/services/speed.png";

const Page = () => {
  return (
    <main>
      <div className="absolute top-0 h-[300px] w-full bg-primary lg:h-[350px]">
        <h3 className="pt-40 text-center text-5xl font-semibold text-white">
          Services
        </h3>

        <BreadCrumb />
      </div>

      <section className="relative bg-[#FFFFFF]">
        <div className="mx-auto mt-[195px] w-11/12 py-10 2xl:container">
          <div className="space-y-2 text-center">
            <h3 className="text--neutral-dark-2 text-xl font-semibold">
              Our Services
            </h3>
            <p className="text-3xl font-bold text-neutral-dark-1">
              Experience Superior Network Services
            </p>
            <p className="mx-auto max-w-lg text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam.
            </p>
          </div>

          <section className="mt-8 items-center justify-between space-y-10 lg:flex lg:space-y-0">
            <div className="text-center">
              <Image
                src={speed}
                alt="speed-services-img"
                className="mx-auto mb-4 h-36 w-40"
              />
              <h4 className="mb-1 font-semibold text-neutral-dark-1">speed</h4>
              <p className="mx-auto max-w-[250px] text-sm">
                Our network offers high-speed internet with various options to
                meet your needs.
              </p>
            </div>

            <div className="text-center">
              <Image
                src={coverage}
                alt="coverage-services-img"
                className="mx-auto mb-4 h-36 w-40"
              />
              <h4 className="mb-1 font-semibold text-neutral-dark-1">
                Coverage
              </h4>
              <p className="mx-auto max-w-[250px] text-sm">
                We provide extensive coverage across the country, ensuring you
                stay connected wherever you go.
              </p>
            </div>

            <div className="text-center">
              <Image
                src={reliability}
                alt="reliability-services-img"
                className="mx-auto mb-4 h-36 w-40"
              />
              <h4 className="mb-1 font-semibold text-neutral-dark-1">
                Reliability
              </h4>
              <p className="mx-auto max-w-[250px] text-sm">
                Our network is built with the latest technology to offer a
                stable and reliable connection at all times.
              </p>
            </div>
          </section>
        </div>

        <div className="absolute bottom-5 right-0">
          <Image src={network} alt="network-design-left" />
        </div>
      </section>

      <Coverage />
      <DataAirtime />
      <div>
        <Testimonial />
      </div>
    </main>
  );
};

export default Page;
