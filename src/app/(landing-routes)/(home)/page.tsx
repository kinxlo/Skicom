import Hero from "~/components/home/hero";
import centerOffer from "../../../../public/images/home/center-offer.png";
import offer from "../../../../public/images/home/offer.png";
import wifiBold from "../../../../public/images/home/wifi-bold.png";

import "./../../../components/home/home.css";

import { Banknote, Headphones } from "lucide-react";
import Image from "next/image";

import Testimonial from "~/components/common/testimonial/testimonial";
import Offers from "~/components/home/offers";

// const jobDescription = [
//   {
//     id: 1,
//     description:
//       "Provide exceptional customer support via phone, email, and live chat.",
//   },
//   {
//     id: 2,
//     description:
//       "Resolve customer inquiries and issues in a timely and professional manner.",
//   },
//   {
//     id: 3,
//     description: "Document and track customer interactions and resolutions.",
//   },
//   {
//     id: 4,
//     description:
//       "Collaborate with other teams to improve customer experience and satisfaction.",
//   },
// ];

function page() {
  return (
    <main className="">
      <Hero />

      <section className="w-full bg-[#fff] py-10 text-center">
        {/* Welcome To SKICOM */}
        <h2 className="text-sm font-semibold">Welcome to SKICOM</h2>

        <h4 className="text-xl font-semibold text-neutral-dark-1">
          A Single Sign-in To Your Digital World
        </h4>
        <p className="mx-auto mt-2 max-w-lg text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
          feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
          Duis posuere venenatis et amet sed.{" "}
        </p>

        <section className="mx-5 mt-10 items-center justify-center text-start lg:mx-10 lg:flex">
          <div className="rate flex h-[300px] w-full flex-col rounded-bl-xl rounded-tl-xl px-7">
            <Banknote color="#007CC3" className="mt-10" size={35} />

            <div>
              <h5 className="my-2 text-lg font-semibold">Affordable Rates</h5>
              <p className="max-w-[300px]">
                Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
                feugiat lacus.{" "}
              </p>
            </div>
          </div>

          <div className="support flex h-[300px] w-full flex-col px-7">
            <Headphones color="white" className="mt-10" size={35} />
            <div>
              <h5 className="my-2 text-lg font-semibold text-white">
                24/7 Support
              </h5>
              <p className="max-w-[300px]">
                Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
                feugiat lacus.{" "}
              </p>
            </div>
          </div>

          <div className="payment flex h-[300px] w-full flex-col rounded-br-xl rounded-tr-xl px-7">
            <Banknote color="#007CC3" className="mx-7 mt-10" size={35} />
            <div>
              <h5 className="my-2 text-lg font-semibold">Secure Payments</h5>
              <p className="max-w-[300px]">
                Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut ventis
                feugiat lacus.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* Welcome To SKICOM */}
      </section>

      <section className="relative py-5 xl:py-14">
        {/* Welcome To SKICOM */}
        <div className="text-center">
          <h4 className="text-sm font-semibold">What We Do At SKICOM</h4>
          <p className="text-xl font-semibold text-neutral-dark-1">
            We Are Offering The Best Services
          </p>
        </div>

        <section className="mr-10 mt-5 items-center justify-between lg:flex xl:mt-20 xl:px-10">
          <div className="flex flex-col gap-7">
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <Image
              src={centerOffer}
              alt="center-offer-img"
              className="w-[200px]"
            />
          </div>

          <div className="mt-5 flex flex-col gap-7 xl:mt-0">
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={wifiBold} alt="offer-img" className="h-14 w-14" />

              <div>
                <h5 className="text-sm font-medium">Swift Network</h5>
                <p className="mt-1 max-w-[200px] text-xs">
                  Lorem ipsum dolor sit amet ctetur. Lorem libero arcu ut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute right-0 top-0">
          <Image src={offer} alt="offer-img" className="h-[350px] w-[500px]" />
        </div>
      </section>

      <Offers />
      {/* <Accordions /> */}
      <Testimonial />

      {/* <JobCard
        jobDescription={jobDescription}
        position="Customer Support"
        contract="Lagos, Full Time"
      /> */}
      {/* <ArticlesCard
        articleImage={article}
        heading={"Getting Started on SKICOM"}
        dateSent={"3 Days Ago"}
        subHeading={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution....."
        }
      /> */}
    </main>
  );
}
export default page;
