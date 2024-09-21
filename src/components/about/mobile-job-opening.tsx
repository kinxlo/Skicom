import JobCard from "../job-card/job-card";
import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface cardProperties {
  id: number;
  position: string;
  location: string;
  opening: string;
  description: {
    id: number;
    descriptions: string;
  }[];
}

interface MobileOffersProperties {
  offers: cardProperties[];
}

const MobileJobOpening = ({ offers }: MobileOffersProperties) => {
  return (
    <main>
      <Carousel className="z-10 w-full">
        <CarouselContent>
          {offers.map((item, index) => (
            <CarouselItem key={index} className="basis-1/1">
              <Card className="">
                <JobCard
                  position={item.position}
                  contract={item.location}
                  opening={item.opening}
                  jobDescription={item.description}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default MobileJobOpening;
