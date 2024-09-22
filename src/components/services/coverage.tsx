import Image from "next/image";

import covered from "../../../public/images/services/covered.png";
import map from "../../../public/images/services/map.png";
import CustomButton from "../common/common-button/common-button";
import { Wrapper } from "../layout/wrapper";
import { Input } from "../ui/input";

const Coverage = () => {
  return (
    <main className="relative bg-[#F6F6F6]">
      <Wrapper>
        <section className="mx-auto w-11/12 pt-10 text-center 2xl:container">
          <h3 className="text-[17px] font-semibold text-neutral-dark-2 xl:text-[27px]">
            Check Our Network Coverage
          </h3>
          <p className="my-2 text-[28px] font-semibold text-neutral-dark-1 lg:text-[44px]">
            See Where You’re Covered
          </p>

          <div className="relative mx-auto mb-[49px] mt-4 lg:w-[800px]">
            <form className="">
              <Input
                type="text"
                className="mx-auto h-[50px] rounded-full bg-[#FFFFFF] outline-none placeholder:text-sm lg:w-[800px]"
                placeholder="Search for our coverage locations"
              />

              <CustomButton
                variant="primary"
                className="right-0 top-0 mt-3 h-[33px] w-[138px] rounded-full lg:absolute lg:mt-0 lg:h-[50px]"
              >
                Search
              </CustomButton>
            </form>
          </div>
        </section>
        <section className="mt-5 pb-10">
          {/* map */}
          <Image
            src={map}
            alt="map"
            className="mx-auto h-64 w-full max-w-full object-cover lg:h-[500px]"
          />
          {/* map */}
        </section>
      </Wrapper>

      <div className="absolute bottom-0 left-0 hidden lg:block">
        <Image
          src={covered}
          alt="network-design-left"
          className="h-[400px] w-[500px]"
        />
      </div>
    </main>
  );
};

export default Coverage;
