import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";

export const SectionTwo = () => {
  return (
    <section className="relative bg-subtle bg-right-top bg-no-repeat py-5 lg:bg-[url('/images/home/offer.png')] xl:py-[85px]">
      <Wrapper>
        <div className="text-center">
          <p className="mx-auto w-fit text-[27px] font-semibold text-neutral-dark-2">
            What We Do At SKICOM
          </p>
          <h2 className="mx-auto my-[25px] w-fit text-2xl font-semibold text-neutral-dark-1 lg:text-[44px]">
            We Are Offering The Best Services
          </h2>
        </div>

        <section className="items-center justify-between lg:flex xl:mt-20">
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <BlurImage
                width={78}
                height={76}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <BlurImage
              width={392}
              height={427}
              src="/images/home/center-offer.png"
              alt="center-offer-img"
            />
          </div>

          <div className="mt-5 flex flex-col gap-7 xl:mt-0">
            <div className="flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <BlurImage
                width={90}
                height={88}
                src="/images/home/wifi-bold.png"
                alt="offer-img"
                className="h-[85px] w-[82px] rounded-lg lg:h-[90px] lg:w-24"
              />

              <div>
                <h5 className="text-xl font-medium text-neutral-dark-2">
                  Swift Network
                </h5>
                <p className="mt-1 max-w-[270px] text-[17px] lg:mt-2 lg:text-lg">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </section>
  );
};
