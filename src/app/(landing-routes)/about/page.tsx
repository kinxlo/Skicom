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
import wifiBold from "../../../../public/images/home/wifi-bold.png";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <div className="h-[350px] w-full bg-[url('/images/about/hero.png')] bg-cover bg-no-repeat lg:h-[400px]">
        <h3 className="pt-48 text-center text-3xl font-semibold text-white lg:pt-44 lg:text-5xl">
          About Us
        </h3>

        <BreadCrumb />
      </div>

      <section className="relative bg-[#F6F6F6]">
        <Wrapper>
          <div className="items-center justify-between py-7 lg:flex lg:py-14">
            <BlurImage
              src={aboutHero}
              alt="about-hero-img"
              className="z-10 lg:h-[650px] lg:w-[600px] lg:object-contain"
            />

            <div className="mt-7 lg:mt-0">
              <h3 className="text-2xl font-semibold text-neutral-dark-2">
                About SKICOM
              </h3>
              <p className="relative my-2 max-w-lg text-[28px] font-semibold leading-[50px] text-neutral-dark-1 lg:text-4xl">
                New Leading Telecoms Provider{" "}
                <span className="absolute mb-10 ms-3 rounded-full border border-neutral-dark-2 px-10 py-2.5 text-sm text-neutral-dark-2">
                  Established 2020.
                </span>
              </p>
              <p className="max-w-xl text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
                venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
                pretium nam donec. Duis posuere venenatis et amet sed.{" "}
              </p>

              <div className="mt-8 flex gap-2">
                <BlurImage
                  src={wifiBold}
                  alt="about-hero-img"
                  className="h-[72px] w-[75px]"
                />

                <div>
                  <h4 className="mb-1 text-xl font-medium text-neutral-dark-2">
                    Swift Network
                  </h4>
                  <p className="max-w-[350px] text-sm">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut
                    ventis feugiat lacus.{" "}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                <BlurImage
                  src={connection}
                  alt="about-hero-img"
                  className="h-[72px] w-[75px]"
                />

                <div>
                  <h4 className="mb-1 text-xl font-medium text-neutral-dark-2">
                    Fast Connection
                  </h4>
                  <p className="max-w-[350px] text-sm">
                    Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut
                    ventis feugiat lacus.{" "}
                  </p>
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

      <section className="relative hidden bg-white lg:block">
        <Wrapper>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark-2">
                Our Mission & Vision
              </h3>
              <p className="my-2 max-w-[400px] text-4xl font-semibold text-neutral-dark-1">
                Transforming Connectivity, Inspiring the Future
              </p>
              <p className="max-w-lg font-medium">
                At Skicom, our mission is to revolutionize network services and
                connectivity through innovative, reliable, and accessible
                solutions. We strive to enhance your digital journey with
                cutting-edge technology and exceptional service.
              </p>
              <p className="mt-3 max-w-lg font-medium">
                Our vision is to lead the future of digital connectivity by
                setting new standards in network services and data access. We
                aim to create a world where everyone is seamlessly connected,
                empowered by limitless possibilities and innovative solutions.
              </p>
            </div>
            <div>
              {" "}
              <BlurImage
                src={vision}
                alt="about-hero-img"
                className="z-10 h-[850px] w-[600px] object-cover"
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

      <section className="relative bg-white py-10 lg:hidden">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-between 2xl:container">
          <div>
            {" "}
            <BlurImage
              src={vision}
              alt="about-hero-img"
              className="z-10 h-[453px]"
            />
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-dark-2">
              Our Mission & Vision
            </h3>
            <p className="my-2 max-w-[300px] text-3xl font-semibold text-neutral-dark-1">
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
        <BlurImage
          src={aboutRight}
          alt="about-hero-img"
          className="absolute bottom-0 right-0 z-0 hidden h-[450px] w-[400px] object-cover lg:block"
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
