import Image from "next/image";

import JobOffers from "~/components/about/job-offers";
import Teams from "~/components/about/teams";
import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import aboutDown from "../../../../public/images/about/about-down.png";
import aboutHero from "../../../../public/images/about/about-hero.png";
import aboutRight from "../../../../public/images/about/about-right.png";
import connection from "../../../../public/images/about/connection.png";
import vision from "../../../../public/images/about/vision.png";
import wifiBold from "../../../../public/images/home/wifi-bold.png";

const Page = () => {
  return (
    <main>
      <div className="absolute top-0 h-[350px] w-full bg-primary">
        <h3 className="pt-40 text-center text-5xl font-semibold text-white">
          About Us
        </h3>

        <BreadCrumb />
      </div>

      <section className="relative">
        <div className="mx-auto mt-[255px] w-11/12 items-center justify-between py-14 2xl:container lg:flex">
          <Image
            src={aboutHero}
            alt="about-hero-img"
            className="z-10 lg:h-[450px] lg:w-[400px] lg:object-cover"
          />

          <div className="mt-7 lg:mt-0">
            <h3 className="text-lg font-semibold text-neutral-dark-2">
              About SKICOM
            </h3>
            <p className="my-2 max-w-xs text-2xl font-semibold text-neutral-dark-1">
              New Leading Telecoms Provider
            </p>
            <p className="max-w-md font-medium">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.{" "}
            </p>

            <div className="mt-3 flex gap-2">
              <Image
                src={wifiBold}
                alt="about-hero-img"
                className="h-12 w-12"
              />

              <div>
                <h4 className="mb-1 text-sm font-medium">Swift Network</h4>
                <p className="max-w-[250px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
                  feugiat lacus.{" "}
                </p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <Image
                src={connection}
                alt="about-hero-img"
                className="h-12 w-12"
              />

              <div>
                <h4 className="mb-1 text-sm font-medium">Fast Connection</h4>
                <p className="max-w-[250px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
                  feugiat lacus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={aboutDown}
          alt="about-hero-img"
          className="absolute bottom-0 left-0 z-0 h-[450px] w-[400px] object-cover"
        />
      </section>

      <section className="relative hidden bg-white lg:block">
        <div className="mx-auto flex w-11/12 items-center justify-between 2xl:container">
          <div>
            <h3 className="text-lg font-semibold text-neutral-dark-2">
              Our Mission & Vision
            </h3>
            <p className="my-2 max-w-[300px] text-2xl font-semibold text-neutral-dark-1">
              Transforming Connectivity, Inspiring the Future
            </p>
            <p className="max-w-sm font-medium">
              At Skicom, our mission is to revolutionize network services and
              connectivity through innovative, reliable, and accessible
              solutions. We strive to enhance your digital journey with
              cutting-edge technology and exceptional service.
            </p>
            <p className="mt-3 max-w-sm font-medium">
              Our vision is to lead the future of digital connectivity by
              setting new standards in network services and data access. We aim
              to create a world where everyone is seamlessly connected,
              empowered by limitless possibilities and innovative solutions.
            </p>
          </div>
          <div>
            {" "}
            <Image
              src={vision}
              alt="about-hero-img"
              className="z-10 h-[550px] w-[400px] object-cover"
            />
          </div>
        </div>
        <Image
          src={aboutRight}
          alt="about-hero-img"
          className="absolute bottom-0 right-0 z-0 h-[450px] w-[400px] object-cover"
        />
      </section>

      <section className="relative bg-white py-10 lg:hidden">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-between 2xl:container">
          <div>
            {" "}
            <Image
              src={vision}
              alt="about-hero-img"
              className="z-10 h-[453px]"
            />
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-dark-2">
              Our Mission & Vision
            </h3>
            <p className="my-2 max-w-[300px] text-2xl font-semibold text-neutral-dark-1">
              Transforming Connectivity, Inspiring the Future
            </p>
            <p className="max-w-sm font-medium">
              At Skicom, our mission is to revolutionize network services and
              connectivity through innovative, reliable, and accessible
              solutions. We strive to enhance your digital journey with
              cutting-edge technology and exceptional service.
            </p>
            <p className="mt-3 max-w-sm font-medium">
              Our vision is to lead the future of digital connectivity by
              setting new standards in network services and data access. We aim
              to create a world where everyone is seamlessly connected,
              empowered by limitless possibilities and innovative solutions.
            </p>
          </div>
        </div>
        <Image
          src={aboutRight}
          alt="about-hero-img"
          className="absolute bottom-0 right-0 z-0 h-[450px] w-[400px] object-cover"
        />
      </section>

      <section>
        {/* job opening */}
        <JobOffers />
        {/* job opening */}
      </section>
      <section>
        {/* Teams */}
        <Teams />
        {/* Teams */}
      </section>

      <div>
        <Testimonial />
      </div>
    </main>
  );
};

export default Page;
