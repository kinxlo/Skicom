import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/ui/input";
import left1 from "../../../../public/images/news-letter/left1.png";
import right1 from "../../../../public/images/news-letter/right1.png";

const NewsLetter = () => {
  return (
    <main className="relative flex h-[258px] items-center justify-center rounded-xl bg-[#007CC3]">
      <section className="absolute left-0 top-0">
        <Image
          src={left1}
          alt={""}
          className="w-[50px] md:w-[80px] xl:w-[100px]"
        />
      </section>

      <section>
        <p className="text-center text-3xl font-medium text-white">
          Subscribe to our newsletter
        </p>
        <div className="mt-7">
          <form
            action=""
            className="items-center justify-center gap-3 px-4 xl:flex"
          >
            <Input
              type="email"
              placeholder="Email Address"
              className="max-w-full rounded-full outline-none xl:w-[456px]"
            />

            <div className="text-center">
              <CustomButton
                className="mt-3 rounded-full bg-neutral-dark-1 text-background xl:mt-0"
                size="lg"
              >
                Subscribe
              </CustomButton>
            </div>
          </form>
        </div>
      </section>

      <section className="absolute bottom-0 right-0">
        <Image
          src={right1}
          alt={""}
          className="w-[50px] md:w-[80px] xl:w-[100px]"
        />
      </section>
    </main>
  );
};

export default NewsLetter;
