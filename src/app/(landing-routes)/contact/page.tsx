import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";

import CustomButton from "~/components/common/common-button/common-button";
import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import big from "../../../../public/images/contact/bigCircle.png";
import small from "../../../../public/images/contact/smallCircle.png";
import map from "../../../../public/images/services/map.png";

const Page = () => {
  return (
    <main>
      <div className="flex h-[350px] w-full items-center justify-center bg-[url('/images/contact/hero.png')] bg-center bg-no-repeat lg:h-[510px] xl:bg-cover">
        <div className="mt-[100px] lg:mt-0">
          <h3 className="text-center text-[32px] font-semibold text-white lg:text-[56px]">
            Contact Us
          </h3>

          <BreadCrumb />
        </div>
      </div>

      <section className="bg-[#F6F6F6] pt-14">
        <Wrapper>
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="my-2 text-[28px] font-semibold leading-[44px] text-neutral-dark-1 lg:text-[44px] xl:leading-[39px]">
              Feel Free To Reach Out
            </p>

            <p className="mx-auto max-w-[792px] text-[17px] leading-[25px] xl:text-[20px] xl:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.
            </p>
          </div>

          <section className="mx-auto mt-[53px] gap-[66px] rounded-[10px] px-0 py-[29px] lg:flex lg:justify-center lg:bg-white lg:px-[42px]">
            {/* contact form */}
            <div className="relative hidden h-[600px] w-full flex-col rounded-bl-xl rounded-tl-xl bg-neutral-dark-2 p-8 text-[#ffff] lg:flex">
              <h4 className="text-[28px] font-semibold text-[#ffff]">
                Contact Information
              </h4>

              <div className="mt-32 space-y-9">
                <div className="flex items-center gap-5">
                  <PhoneCall size={18} />
                  <a
                    href="tel:+2348130054558"
                    className="text-[17px] xl:text-[20px]"
                  >
                    +2348130054558
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <Mail size={18} />
                  <a
                    href="mailto:skicom001@gmail.com"
                    className="text-[17px] xl:text-[20px]"
                  >
                    skicom001@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <MapPin size={18} />
                  <p className="text-[17px] xl:text-[20px]">
                    Plot 1, Kwara Osun Street, Lagos.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-7 flex flex-1 items-center gap-8">
                <div className="h-fit w-fit rounded-full border p-1.5">
                  <a href="">
                    <Twitter size={20} />
                  </a>
                </div>

                <div className="h-fit w-fit rounded-full border p-1.5">
                  <a href="">
                    <Facebook size={20} />
                  </a>
                </div>

                <div className="h-fit w-fit rounded-full border p-1.5">
                  <a href="">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div>
                <BlurImage
                  src={big}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
                <BlurImage
                  src={small}
                  alt=""
                  className="absolute bottom-14 right-28"
                />
              </div>
            </div>

            <div className="mt-6">
              {/* form */}
              <form className="w-full space-y-[23px]">
                <Input
                  type="text"
                  className="h-11 bg-[#FFFFFF] placeholder:text-sm lg:w-[500px] lg:bg-transparent"
                  placeholder="Full Name"
                />
                <Input
                  type="email"
                  className="h-11 bg-[#FFFFFF] placeholder:text-sm lg:w-[500px] lg:bg-transparent"
                  placeholder="Email Address"
                />
                <Input
                  type="text"
                  className="h-11 bg-[#FFFFFF] placeholder:text-sm lg:w-[500px] lg:bg-transparent"
                  placeholder="Subject"
                />

                <Textarea
                  className="resize-non1 h-[280px] resize-none bg-[#FFFFFF] placeholder:text-sm lg:w-[500px] lg:bg-transparent"
                  placeholder="Message"
                />
                <CustomButton
                  variant="primary"
                  className="mt-5 w-full rounded-full lg:h-[50px] lg:w-[300px]"
                >
                  Send Message
                </CustomButton>
              </form>
              {/* form */}
            </div>
            {/* contact form */}
          </section>
        </Wrapper>
        <div className="mt-5 lg:mt-20">
          {/* map */}
          <BlurImage
            src={map}
            alt="map"
            className="mx-auto h-52 w-full max-w-full object-cover lg:h-[318px]"
          />
          {/* map */}
        </div>

        <div className="mx-7 pb-1 lg:hidden">
          <Testimonial />
        </div>
      </section>
    </main>
  );
};

export default Page;
