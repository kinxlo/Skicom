/* eslint-disable react/no-unescaped-entities */

import Accordions from "~/components/common/accordion/accordion-component";
import ArticlesCard from "~/components/common/articles-card/articles-card";
import CustomButton from "~/components/common/common-button/common-button";
import { BreadCrumb } from "~/components/layout/bread-crumb/bread-crumb";
import { Wrapper } from "~/components/layout/wrapper";
import BlurImage from "~/components/miscellaneous/blur-image";
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
      <div className="h-[350px] w-full bg-[url('/images/contact/hero.png')] bg-cover bg-no-repeat lg:h-[350px]">
        <h3 className="pt-48 text-center text-3xl font-semibold text-white lg:pt-40 lg:text-5xl">
          Customer Care
        </h3>

        <BreadCrumb />
      </div>

      <section className="bg-[#F6F6F6]">
        <section className="mx-auto py-7 2xl:container lg:py-14">
          <div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-neutral-dark-1 lg:text-4xl">
                Frequently Asked Questions
              </h3>
              <p className="mt-3 text-lg lg:mt-2">
                Ask everything you need to know about our products and services.
              </p>
            </div>

            <Accordions />
          </div>

          <Wrapper className="mt-7 rounded-lg bg-[#fff] py-6 text-center lg:mt-14">
            <BlurImage
              src={teamImage}
              alt="team-image"
              className="mx-auto mb-2 h-[60px] w-[133px]"
            />
            <h4 className="text-[31px] font-bold text-[#090914]">
              Still have questions?
            </h4>
            <p className="mx-auto mt-1 max-w-[250px] text-[17px] text-[#52525B] lg:max-w-2xl lg:text-[25px]">
              Can't find the answer you're looking for? Try out our AI automated
              live chat support.
            </p>
            <CustomButton
              variant="primary"
              className="mt-5 h-[50px] w-[285px] rounded-full px-14 text-lg"
            >
              Meet Dave
            </CustomButton>
          </Wrapper>

          <Wrapper className="mt-10">
            <div className="items-center justify-between lg:flex">
              <div>
                <h4 className="text-[28px] font-semibold text-neutral-dark-1 lg:text-4xl">
                  Learn From Our Articles
                </h4>
                <p className="mt-2 text-center text-lg lg:text-start">
                  Read everything you need to know about our products and
                  services.
                </p>
              </div>

              <div className="text-center">
                <CustomButton
                  className="mt-4 h-[40px] w-[170px] rounded-full border border-primary bg-transparent text-sm text-primary lg:mt-0"
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
          </Wrapper>
        </section>
      </section>
    </main>
  );
};

export default CustomerCare;
