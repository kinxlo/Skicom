import CustomButton from "../common/common-button/common-button";
import DataCard from "../common/data-card/data-card";

import "./home.css";

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
    <section className="bg-offers relative bg-primary py-7 lg:py-[90px]">
      <Wrapper>
        <section>
          <div className="mb-[51px] flex flex-col items-center justify-between md:flex-row">
            <div>
              <p className="mb-1 text-[20px] text-gray-300 lg:text-[24px]">
                Best Of SKICOM
              </p>
              <h3 className="mb-3 text-[26px] text-white lg:text-[44px]">
                Promotions And Offers
              </h3>
            </div>

            <div>
              <CustomButton className="h-[44px] w-[180px] rounded-full text-primary">
                View All Plans
              </CustomButton>
            </div>
          </div>

          <div className="hidden flex-wrap items-center justify-between lg:flex">
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
        </section>
      </Wrapper>
    </section>
  );
};

export default Offers;
