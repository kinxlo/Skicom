import DataCard from "../common/data-card/data-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

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

export const ServiceMobile = () => {
  return (
    <main>
      <Carousel className="z-10 w-full">
        <CarouselContent>
          {offers.map((item, index) => (
            <CarouselItem key={index} className="basis-1/1">
              <div className="">
                <DataCard
                  price={item.price}
                  initialPrice={item.initialPrice}
                  plan={item.plan}
                  packages={item.packages}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};
