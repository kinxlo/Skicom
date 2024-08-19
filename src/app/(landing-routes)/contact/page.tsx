import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import Testimonial from "~/components/common/testimonial/testimonial";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import big from "../../../../public/images/contact/bigCircle.png";
import small from "../../../../public/images/contact/smallCircle.png";
import map from "../../../../public/images/services/map.png";

const Page = () => {
  return (
    <main>
      <div className="absolute top-0 h-[300px] w-full bg-[#007CC3CC] lg:h-[350px]">
        <h3 className="pt-40 text-center text-5xl font-semibold text-white">
          Contact Us
        </h3>

        <BreadCrumb />
      </div>

      <section className="mt-[255px] pt-14">
        <section className="mx-auto w-11/12 2xl:container">
          <div className="flex flex-col justify-center">
            <p className="text-center text-3xl font-bold text-neutral-dark-1">
              Feel Free To Reach Out
            </p>

            <p className="mx-auto mt-2 max-w-lg text-center text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut
              venenatis feugiat lacus. Elit tellus morbi quis a aliquam mi
              pretium nam donec. Duis posuere venenatis et amet sed.
            </p>
          </div>

          <div className="mx-auto mt-10 gap-10 p-2 lg:flex lg:w-fit lg:justify-center lg:bg-white lg:p-4">
            {/* contact form */}
            <div className="relative hidden h-[500px] w-[450px] flex-col bg-neutral-dark-2 p-8 text-[#ffff] lg:flex">
              <h4 className="font-semibold">Contact Information</h4>

              <div className="mt-24 space-y-9">
                <div className="flex items-center gap-5">
                  <PhoneCall size={18} />
                  <a href="tel:+2348130054558" className="text-sm">
                    +2348130054558
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <Mail size={18} />
                  <a href="mailto:skicom001@gmail.com" className="text-sm">
                    skicom001@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <MapPin size={18} />
                  <p className="text-sm">Plot 1, Kwara Osun Street, Lagos.</p>
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
                <Image src={big} alt="" className="absolute bottom-0 right-0" />
                <Image
                  src={small}
                  alt=""
                  className="absolute bottom-14 right-28"
                />
              </div>
            </div>

            <div className="mt-7">
              {/* form */}
              <form className="w-full space-y-5">
                <Input
                  type="text"
                  className="bg-[#FFFFFF] placeholder:text-sm lg:w-[400px] lg:bg-transparent"
                  placeholder="Full Name"
                />
                <Input
                  type="email"
                  className="bg-[#FFFFFF] placeholder:text-sm lg:w-[400px] lg:bg-transparent"
                  placeholder="Email Address"
                />
                <Input
                  type="text"
                  className="bg-[#FFFFFF] placeholder:text-sm lg:w-[400px] lg:bg-transparent"
                  placeholder="Subject"
                />

                <Textarea
                  className="h-[200px] resize-none bg-[#FFFFFF] placeholder:text-sm lg:w-[400px] lg:bg-transparent"
                  placeholder="Message"
                />
                <CustomButton
                  variant="primary"
                  className="mt-5 w-full rounded-full lg:w-[200px]"
                >
                  Send Message
                </CustomButton>
              </form>
              {/* form */}
            </div>
            {/* contact form */}
          </div>
        </section>
        <div className="mt-5 lg:mt-14">
          {/* map */}
          <Image
            src={map}
            alt="map"
            className="mx-auto h-52 w-full max-w-full object-cover lg:h-[400px]"
          />
          {/* map */}
        </div>

        <div className="lg:hidden">
          <Testimonial />
        </div>
      </section>
    </main>
  );
};

export default Page;
