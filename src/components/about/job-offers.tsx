import Image from "next/image";

import offerDown from "../../../public/images/home/offer-ring-down.png";
import offerUp from "../../../public/images/home/offer-ring-up.png";
import JobCard from "../job-card/job-card";
import { Wrapper } from "../layout/wrapper";
import MobileJobOpening from "./mobile-job-opening";

const offers = [
  {
    id: 1,
    position: "Customer Support",
    location: "Lagos",
    opening: "Full Time",
    description: [
      {
        id: 1,
        descriptions:
          "Provide exceptional customer support via phone, email, and live chat.",
      },
      {
        id: 2,
        descriptions:
          "Resolve customer inquiries and issues in a timely and professional manner.",
      },
      {
        id: 3,
        descriptions:
          "Document and track customer interactions and resolutions.",
      },
      {
        id: 4,
        descriptions:
          "Collaborate with other teams to improve customer experience and satisfaction.",
      },
    ],
  },
  {
    id: 2,
    position: "Customer Support",
    location: "Lagos",
    opening: "Full Time",
    description: [
      {
        id: 1,
        descriptions:
          "Provide exceptional customer support via phone, email, and live chat.",
      },
      {
        id: 2,
        descriptions:
          "Resolve customer inquiries and issues in a timely and professional manner.",
      },
      {
        id: 3,
        descriptions:
          "Document and track customer interactions and resolutions.",
      },
      {
        id: 4,
        descriptions:
          "Collaborate with other teams to improve customer experience and satisfaction.",
      },
    ],
  },
  {
    id: 3,
    position: "Customer Support",
    location: "Lagos",
    opening: "Full Time",
    description: [
      {
        id: 1,
        descriptions:
          "Provide exceptional customer support via phone, email, and live chat.",
      },
      {
        id: 2,
        descriptions:
          "Resolve customer inquiries and issues in a timely and professional manner.",
      },
      {
        id: 3,
        descriptions:
          "Document and track customer interactions and resolutions.",
      },
      {
        id: 4,
        descriptions:
          "Collaborate with other teams to improve customer experience and satisfaction.",
      },
    ],
  },
];

const JobOffers = () => {
  return (
    <section className="relative bg-primary py-7 lg:py-10">
      <Wrapper>
        <section className="">
          <div className="text-center">
            <p className="mb-1 text-[17px] text-gray-300 xl:text-[27px]">
              Join Our Team
            </p>
            <h3 className="mb-3 text-[28px] text-white xl:text-[44px]">
              Current Job Openings
            </h3>
          </div>

          <div className="my-7 hidden items-center justify-between gap-5 lg:flex">
            {offers.map((item) => (
              <JobCard
                key={item.id}
                jobDescription={item.description}
                position={item.position}
                contract={item.location}
                opening={item.opening}
              />
            ))}
          </div>

          <div className="mt-4 lg:hidden">
            <MobileJobOpening offers={offers} />
          </div>
        </section>
      </Wrapper>

      <section>
        <div className="hidden lg:block">
          <Image
            src={offerDown}
            alt="offer-ring-down"
            className="absolute bottom-0 left-0 z-0 w-[400px]"
          />
          <Image
            src={offerUp}
            alt="offer-ring-up"
            className="absolute right-0 top-0 z-0 w-[400px]"
          />
        </div>
      </section>
    </section>
  );
};

export default JobOffers;
