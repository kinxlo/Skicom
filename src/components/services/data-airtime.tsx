"use client";

import Image from "next/image";
import { useState } from "react";

import offerUp from "../../../public/images/home/offer-ring-up.png";
import offerMiddle from "../../../public/images/services/offerMiddle.png";
import offerRight from "../../../public/images/services/offerRight.png";
import CustomButton from "../common/common-button/common-button";
import DataCard from "../common/data-card/data-card";
import { Wrapper } from "../layout/wrapper";

const offers = [
  {
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
    type: "data",
  },
  {
    price: 200,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },
  {
    price: 500,
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
    type: "data",
  },

  //   data
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
  {
    price: 7000,
    initialPrice: 3500,
    plan: "3-Days Plan",
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
    type: "airtime",
  },
];

const DataAirtime = () => {
  const [serviceType, setServiceType] = useState("data");

  const choosenType = offers.filter((p) => p.type === serviceType);

  return (
    <main className="relative hidden bg-primary pb-4 lg:block lg:py-7">
      <Wrapper>
        <section className="">
          <div className="text-center">
            <h4 className="text-xl text-[#D4D4D4]">Our Airtime & Data Plans</h4>
            <p className="text-[44px] text-white">
              Choose The Perfect Plan For You
            </p>
          </div>

          <div className="mx-auto mt-2 flex w-[400px] rounded-full border border-black">
            <CustomButton
              className={`w-full rounded-full px-10 ${serviceType === "data" ? "bg-white text-neutral-dark-1 duration-300" : "bg-transparent px-10 text-white duration-300"} h-[50px]`}
              onClick={() => setServiceType("data")}
            >
              Data
            </CustomButton>
            <CustomButton
              className={`w-full rounded-full px-10 ${serviceType === "airtime" ? "bg-white text-neutral-dark-1 duration-300" : "bg-transparent px-10 text-white duration-300"} h-[50px]`}
              onClick={() => setServiceType("airtime")}
            >
              Airtime
            </CustomButton>
          </div>

          <div className="mt-16 grid items-center gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {choosenType.map((item, index) => (
              <DataCard
                key={index}
                price={item.price}
                plan={item.plan}
                packages={item.packages}
                initialPrice={undefined}
              />
            ))}
          </div>

          <div className="mt-5 text-center text-sm text-white">
            Pagination here
          </div>
        </section>
      </Wrapper>

      <div>
        <Image
          src={offerRight}
          alt="offer-ring-down"
          className="absolute bottom-0 right-0 z-0 w-[400px]"
        />
        <Image
          src={offerMiddle}
          alt="offer-ring-down"
          className="absolute left-0 top-[30%] h-[500px] w-[60px]"
        />
        <Image
          src={offerUp}
          alt="offer-ring-up"
          className="absolute right-0 top-0 w-[500px]"
        />
      </div>
    </main>
  );
};

export default DataAirtime;
