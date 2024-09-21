import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import Apple from "../../../../public/images/footer/Apple.png";
import facebook from "../../../../public/images/footer/facebook.png";
import instagram from "../../../../public/images/footer/instagram.png";
import Playstore from "../../../../public/images/footer/Playstore.png";
import twitter from "../../../../public/images/footer/twitter.png";
import Logo from "../../../../public/images/logo/skicom.png";
import NewsLetter from "../../common/news-letter/news-letter";
import { Wrapper } from "../wrapper";

const Footer: FC = () => {
  const getYear = new Date().getFullYear();

  return (
    <main className="w-full bg-black py-10 md:py-14">
      <Wrapper>
        <section>
          <div>
            <NewsLetter />
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 xl:hidden">
            <a href="" className="rounded-lg border p-2 pr-3 md:flex-none">
              <div className="flex items-center gap-2">
                <Image src={Playstore} alt={"Skicom-logo"} height={30} />

                <div className="text-[#FFFFFF]">
                  <p className="-mb-1 text-xs">GET IT ON</p>
                  <p className="[#FFFFFF]space-nowrap mt-0 text-sm">
                    Google Play
                  </p>
                </div>
              </div>
            </a>

            <a href="" className="rounded-lg border p-2 md:flex-none">
              <div className="flex items-center gap-2">
                <Image src={Apple} alt={"Skicom-logo"} height={30} />

                <div className="text-[#FFFFFF]">
                  <p className="[#FFFFFF]space-nowrap -mb-1 text-xs">
                    Download on the
                  </p>
                  <p className="mt-0 text-sm">App Store</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-10 items-center justify-between text-[#FFFFFF] xl:flex">
            <div className="flex flex-col items-center justify-center xl:block">
              <Image src={Logo} alt={"Skicom-logo"} height={50} />

              <div className="mt-5 flex items-center gap-4">
                <a href="" className="rounded-full border p-2">
                  <Image
                    src={instagram}
                    alt={""}
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>

                <a href="" className="rounded-full border p-2">
                  <Image
                    src={facebook}
                    alt={""}
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>

                <a href="" className="rounded-full border p-2">
                  <Image
                    src={twitter}
                    alt={""}
                    className="h-[25px] w-[25px] rounded-full"
                  />
                </a>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-[#FFFFFF]">
                Contact
              </h2>
              <p className="mt-5 text-sm text-[#FFFFFF]">
                Plot 1, Kwara Osun Street, Lagos.
              </p>

              <div className="mt-2 flex items-center gap-1">
                <a href="tel: 08130054558" className="text-sm text-[#FFFFFF]">
                  08130054558,
                </a>
                <a href="tel: 08123456443" className="text-sm text-[#FFFFFF]">
                  08123456443
                </a>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-[#FFFFFF]">
                Quick Links
              </h2>
              <div className="flex items-center gap-20">
                <div className="mt-5 flex flex-col gap-2">
                  <Link href={"/about"} className="text-sm text-[#FFFFFF]">
                    About
                  </Link>
                  <Link href={"/services"} className="text-sm text-[#FFFFFF]">
                    Services
                  </Link>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <Link href={"/store"} className="text-sm text-[#FFFFFF]">
                    Store
                  </Link>
                  <Link href={"/contact-us"} className="text-sm text-[#FFFFFF]">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <h2 className="text-sm font-semibold uppercase text-[#FFFFFF]">
                Help
              </h2>

              <div className="flex items-center gap-20">
                <div className="mt-5 flex flex-col gap-2">
                  <Link href={"/faq"} className="text-sm text-[#FFFFFF]">
                    FAQ
                  </Link>
                  <Link href={"/blog"} className="text-sm text-[#FFFFFF]">
                    Blog
                  </Link>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <Link href={"/live-chat"} className="text-sm text-[#FFFFFF]">
                    Live Chat
                  </Link>
                  <Link
                    href={"/terms-condition"}
                    className="text-sm text-[#FFFFFF]"
                  >
                    Terms & Condition
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-10" />

          <p className="text-center text-[17px] text-[#71717A] lg:text-2xl">
            &copy; Copyright {getYear}. All Rights Reserved by SKICOM
          </p>
        </section>
      </Wrapper>
    </main>
  );
};

export default Footer;
