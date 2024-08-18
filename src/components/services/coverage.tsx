import Image from "next/image";

import covered from "../../../public/images/services/covered.png";
import map from "../../../public/images/services/map.png";
import CustomButton from "../common/common-button/common-button";
import { Input } from "../ui/input";

const Coverage = () => {
  return (
    <main className="relative bg-[#F6F6F6]">
      <section className="mx-auto w-11/12 pt-10 text-center 2xl:container">
        <h3 className="text--neutral-dark-2 text-lg font-semibold">
          Check Our Network Coverage
        </h3>
        <p className="text-3xl font-bold text-neutral-dark-1">
          See Where You’re Covered
        </p>

        <div className="relative mx-auto mt-4 px-5 lg:w-[700px]">
          <form className="">
            <Input
              type="text"
              className="mx-auto rounded-full pr-[85px] outline-none placeholder:text-sm lg:w-[700px]"
              placeholder="Search for our coverage locations"
            />

            <CustomButton
              variant="primary"
              className="right-0 top-0.5 mt-3 w-[100px] rounded-full lg:absolute lg:mt-0"
            >
              Search
            </CustomButton>
          </form>
        </div>
      </section>
      <section className="mx-auto mb-10 mt-5 2xl:container lg:w-11/12">
        {/* map */}
        <Image
          src={map}
          alt="map"
          className="mx-auto h-64 w-full max-w-full object-cover lg:h-[500px]"
        />
        {/* map */}
      </section>

      <div className="absolute bottom-0 left-0">
        <Image
          src={covered}
          alt="network-design-left"
          className="h-[400px] w-[300px]"
        />
      </div>
    </main>
  );
};

export default Coverage;
