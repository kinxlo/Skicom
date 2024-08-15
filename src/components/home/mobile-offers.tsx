import DataCard from "../common/data-card/data-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface cardProperties {
  price: number;
  initialPrice: number;
  plan: string;
  packages: {
    id: number;
    data: string;
  }[];
}

interface MobileOffersProperties {
  offers: cardProperties[];
}

const MobileOffers = ({ offers }: MobileOffersProperties) => {
  return (
    <main>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="">
          {offers.map((item, index) => (
            <CarouselItem key={index} className="basis-11/12">
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

export default MobileOffers;
