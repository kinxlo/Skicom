/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Accordions from "~/components/common/accordion/accordion-component";
import ArticlesCard from "~/components/common/articles-card/articles-card";
import CustomButton from "~/components/common/common-button/common-button";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import one from "../../../../public/images/customer-care/1.png";
import two from "../../../../public/images/customer-care/2.png";
import teamImage from "../../../../public/images/customer-care/team-image.png";

const article = [
  {
    id: 1,
    articleImage: one,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 2,
    articleImage: two,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
];

const CustomerCare = () => {
  return (
    <main>
      <div className="absolute top-0 h-[300px] w-full bg-primary lg:h-[350px]">
        <h3 className="pt-40 text-center text-3xl font-semibold text-white lg:text-5xl">
          Customer Care
        </h3>

        <BreadCrumb />
      </div>

      <section className="mx-auto mt-[220px] w-11/12 py-7 2xl:container lg:mt-[255px] lg:py-14">
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-neutral-dark-1 lg:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-3 text-sm lg:mt-2">
              Ask everything you need to know about our products and services.
            </p>
          </div>

          <Accordions />
        </div>

        <div className="mt-7 rounded-lg bg-[#fff] py-6 text-center lg:mt-14">
          <Image
            src={teamImage}
            alt="team-image"
            className="mx-auto mb-2 h-10 w-24"
          />
          <h4 className="font-bold">Still have questions?</h4>
          <p className="mx-auto mt-1 max-w-[250px] text-sm lg:max-w-md">
            Can't find the answer you're looking for? Try out our AI automated
            live chat support.
          </p>
          <CustomButton variant="primary" className="mt-5 rounded-full px-14">
            Meet Dave
          </CustomButton>
        </div>

        <section className="mt-10">
          <div className="items-center justify-between lg:flex">
            <div>
              <h4 className="text-2xl font-semibold text-neutral-dark-1">
                Learn From Our Articles
              </h4>
              <p className="mt-2 text-center text-sm lg:text-start">
                Read everything you need to know about our products and
                services.
              </p>
            </div>

            <div className="text-center">
              <CustomButton
                className="mt-4 rounded-full border border-primary bg-transparent text-sm text-primary lg:mt-0"
                href="/articles"
              >
                View All Articles
              </CustomButton>
            </div>
          </div>

          <div className="mt-8 items-center justify-between space-y-5 lg:flex lg:space-y-0">
            {article.map((a) => (
              <ArticlesCard
                key={a.id}
                articleImage={a.articleImage}
                heading={a.heading}
                dateSent={a.dateSent}
                subHeading={a.subHeading}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default CustomerCare;
