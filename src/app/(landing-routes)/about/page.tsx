import JobOffers from "~/components/about/job-offers";
import Teams from "~/components/about/teams";
import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";
import aboutDown from "../../../../public/images/about/about-down.png";
import aboutHero from "../../../../public/images/about/about-hero.png";
import aboutRight from "../../../../public/images/about/about-right.png";
import connection from "../../../../public/images/about/connection.png";
import vision from "../../../../public/images/about/vision.png";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <div className="flex h-[350px] w-full items-center justify-center bg-[url('/images/about/hero.png')] bg-center bg-no-repeat lg:h-[510px] xl:bg-cover">
        <div className="mt-[100px] lg:mt-0">
          <h3 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
            About Us
          </h3>

          <BreadCrumb />
        </div>
      </div>

      <section className="relative bg-[#F6F6F6]">
        <Wrapper>
          <div className="items-center justify-between gap-[66px] py-7 lg:flex lg:py-14">
            <BlurImage
              src={aboutHero}
              alt="about-hero-img"
              className="z-10 lg:h-[650px] lg:w-[600px] lg:object-contain"
            />

            <div className="mt-7 lg:mt-0">
              <h3 className="text-[17px] font-semibold text-neutral-dark-2 xl:text-[27px]">
                About SKICOM
              </h3>
              <p className="relative my-2 text-[28px] font-semibold leading-[52px] text-neutral-dark-1 lg:text-[44px] xl:leading-[62px]">
                New Leading Telecoms Provider
                <span className="absolute ms-3 rounded-full border border-neutral-dark-2 px-10 py-2.5 text-sm text-neutral-dark-2 xl:mt-3">
                  Established 2020.
                </span>
              </p>
              <p className="text-[17px] leading-[25px] xl:text-[20px] xl:leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
                venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
                pretium nam donec. Duis posuere venenatis et amet sed.{" "}
              </p>

              <div className="mt-[24px] flex gap-2">
                <BlurImage
                  width={90}
                  height={88}
                  src="/images/home/wifi-bold.png"
                  alt="offer-img"
                  className="h-[90px] w-24 rounded-lg"
                />

                <div>
                  <h5 className="text-[20px] font-medium text-neutral-dark-2 xl:text-[22px]">
                    Swift Network
                  </h5>
                  <p className="mt-2 max-w-[270px] text-[17px]">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                  </p>
                </div>
              </div>

              <div className="mt-[24px] flex gap-2">
                <div className="flex gap-2">
                  <BlurImage
                    width={90}
                    height={88}
                    src={connection}
                    alt="offer-img"
                    className="h-[90px] w-24 rounded-lg"
                  />

                  <div>
                    <h5 className="text-[20px] font-medium text-neutral-dark-2 xl:text-[22px]">
                      Fast Connection
                    </h5>
                    <p className="mt-2 max-w-[270px] text-[17px]">
                      Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <BlurImage
          src={aboutDown}
          alt="about-hero-img"
          className="absolute bottom-0 left-0 z-0 hidden h-[500px] w-[700px] object-cover lg:block"
        />
      </section>

      <section className="relative bg-white">
        <Wrapper>
          <div className="flex flex-col-reverse items-center justify-between gap-[76px] lg:flex-row">
            <div className="my-[32px] flex-1 xl:my-0">
              <h3 className="text-[17px] text-neutral-dark-2 xl:text-[27px]">
                Our Mission & Vision
              </h3>
              <p className="my-2 text-[28px] text-neutral-dark-1 xl:text-[44px]">
                Transforming Connectivity, Inspiring the Future
              </p>
              <p className="mb-[20px] text-[17px] leading-[30px] xl:text-[20px]">
                At Skicom, our mission is to revolutionize network services and
                connectivity through innovative, reliable, and accessible
                solutions. We strive to enhance your digital journey with
                cutting-edge technology and exceptional service.
              </p>
              <p className="text-[17px] leading-[30px] xl:text-[20px]">
                Our vision is to lead the future of digital connectivity by
                setting new standards in network services and data access. We
                aim to create a world where everyone is seamlessly connected,
                empowered by limitless possibilities and innovative solutions.
              </p>
            </div>
            <div className="mt-[35px] flex-1 xl:mt-0">
              <BlurImage
                width={323}
                height={453}
                src={vision}
                alt="about-hero-img"
                className="w-full"
              />
            </div>
          </div>
        </Wrapper>
        <BlurImage
          src={aboutRight}
          alt="about-hero-img"
          className="absolute bottom-0 right-0 z-0 h-[450px] w-[500px] object-cover"
        />
      </section>

      {/* sm version */}
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

      <Wrapper>
        <Testimonial />
      </Wrapper>
    </main>
  );
};

export default Page;
