import offerDown from "../../../public/images/home/offer-ring-down.png";
import offerUp from "../../../public/images/home/offer-ring-up.png";
import CustomButton from "../common/common-button/common-button";
import DataCard from "../common/data-card/data-card";

import "./home.css";

import Image from "next/image";

import { Wrapper } from "../layout/wrapper";
import MobileOffers from "./mobile-offers";

const offers = [
  {
    id: 1,
    price: 500,
    initialPrice: 1500,
    plan: "2-Days Plan",
    packages: [
      {
        id: 1,
        data: "Locally NG",
      },
      {
        id: 2,
        data: "Valid for 2days",
      },
      {
        id: 3,
        data: "Lorem ipsum hes",
      },
      {
        id: 4,
        data: "Due tndcadadd",
      },
      {
        id: 5,
        data: "advsdv svd ssvc dvs",
      },
    ],
  },
  {
    id: 2,
    price: 2000,
    initialPrice: 3500,
    plan: "7-Days Plan",
    packages: [
      {
        id: 1,
        data: "Locally NG",
      },
      {
        id: 2,
        data: "Valid for 2days",
      },
      {
        id: 3,
        data: "Lorem ipsum hes",
      },
      {
        id: 4,
        data: "Due tndcadadd",
      },
      {
        id: 5,
        data: "advsdv svd ssvc dvs",
      },
    ],
  },
  {
    id: 3,
    price: 5000,
    initialPrice: 7500,
    plan: "Family Plan",
    packages: [
      {
        id: 1,
        data: "Locally NG",
      },
      {
        id: 2,
        data: "Valid for 2days",
      },
      {
        id: 3,
        data: "Lorem ipsum hes",
      },
      {
        id: 4,
        data: "Due tndcadadd",
      },
      {
        id: 5,
        data: "advsdv svd ssvc dvs",
      },
    ],
  },
];

const Offers = () => {
  return (
    <section className="relative bg-primary py-7 lg:py-10">
      <Wrapper>
        <main>
          <div className="items-center text-center lg:mr-10 lg:flex lg:justify-between">
            <div>
              <p className="mb-1 text-[16px] text-gray-300 lg:text-sm">
                Best Of SKICOM
              </p>
              <h3 className="mb-3 text-[26px] text-white lg:text-xl">
                Promotions And Offers
              </h3>
            </div>

            <div className=" ">
              <CustomButton className="h-[44px] w-[180px] rounded-full text-[16px] text-primary lg:text-xs">
                View All Plans
              </CustomButton>
            </div>
          </div>

          <div className="my-7 hidden items-center justify-between lg:flex">
            {offers.map((item) => (
              <DataCard
                key={item.id}
                price={item.price}
                initialPrice={item.initialPrice}
                plan={item.plan}
                packages={item.packages}
              />
            ))}
          </div>

          <div className="mt-4 lg:hidden">
            <MobileOffers offers={offers} />
          </div>
        </main>
      </Wrapper>

      <section className="hidden lg:block">
        <div>
          <Image
            src={offerDown}
            alt="offer-ring-down"
            className="absolute bottom-0 left-0 w-[300px]"
          />
          <Image
            src={offerUp}
            alt="offer-ring-up"
            className="absolute right-0 top-0 w-[300px]"
          />
        </div>
      </section>
    </section>
  );
};

export default Offers;
