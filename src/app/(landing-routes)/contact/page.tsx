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
      <div className="h-[350px] w-full bg-[url('/images/contact/hero.png')] bg-cover bg-no-repeat lg:h-[400px]">
        <h3 className="pt-48 text-center text-3xl font-semibold text-white lg:text-5xl">
          Contact Us
        </h3>

        <BreadCrumb />
      </div>

      <section className="bg-[#F6F6F6] pt-14">
        <section className="mx-auto w-11/12 2xl:container">
          <div className="flex flex-col justify-center">
            <p className="text-center text-2xl font-bold text-neutral-dark-1 lg:text-4xl">
              Feel Free To Reach Out
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-center text-xl">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.
            </p>
          </div>

          <div>
            <Wrapper className="mx-auto mt-10 gap-14 p-2 lg:flex lg:justify-center lg:bg-white lg:p-10">
              {/* contact form */}
              <div className="relative hidden h-[600px] w-full flex-col rounded-bl-xl rounded-tl-xl bg-neutral-dark-2 p-8 text-[#ffff] lg:flex">
                <h4 className="font-semibold text-[#ffff]">
                  Contact Information
                </h4>

                <div className="mt-32 space-y-9">
                  <div className="flex items-center gap-5">
                    <PhoneCall size={18} />
                    <a href="tel:+2348130054558" className="text-lg">
                      +2348130054558
                    </a>
                  </div>

                  <div className="flex items-center gap-5">
                    <Mail size={18} />
                    <a href="mailto:skicom001@gmail.com" className="text-lg">
                      skicom001@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-5">
                    <MapPin size={18} />
                    <p className="text-lg">Plot 1, Kwara Osun Street, Lagos.</p>
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

              <div className="md:mt-6">
                {/* form */}
                <form className="w-full space-y-5">
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
            </Wrapper>
          </div>
        </section>
        <div className="mt-5 lg:mt-20">
          {/* map */}
          <BlurImage
            src={map}
            alt="map"
            className="mx-auto h-52 w-full max-w-full object-cover lg:h-[400px]"
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
