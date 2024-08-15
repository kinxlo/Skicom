import CustomButton from "../common/common-button/common-button";
import DataCard from "../common/data-card/data-card";

import "./home.css";

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
    <main className="w-full bg-primary p-4 lg:p-10">
      <div className="items-center text-center lg:mr-10 lg:flex lg:justify-between">
        <div>
          <p className="mb-1 text-sm text-gray-300">Best Of SKICOM</p>
          <h3 className="mb-3 text-white">Promotions And Offers</h3>
        </div>

        <div>
          <CustomButton className="rounded-full text-xs text-primary">
            View All Plans
          </CustomButton>
        </div>
      </div>

      <div className="my-7 hidden items-center justify-between xl:flex">
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
  );
};

export default Offers;
