import ArticlesCard from "~/components/common/articles-card/articles-card";
import DataCard from "~/components/common/data-card/data-card";
import JobCard from "~/components/job-card/job-card";
import Accordions from "~/components/layout/accordion/accordion-component";
// import Paginations from "~/components/layout/pagination/pagination";
import Testimonial from "~/components/layout/testimonial/testimonial";
import article from "../../../../public/images/article-card/article.png";

const packages = [
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
];

const jobDescription = [
  {
    id: 1,
    description:
      "Provide exceptional customer support via phone, email, and live chat.",
  },
  {
    id: 2,
    description:
      "Resolve customer inquiries and issues in a timely and professional manner.",
  },
  {
    id: 3,
    description: "Document and track customer interactions and resolutions.",
  },
  {
    id: 4,
    description:
      "Collaborate with other teams to improve customer experience and satisfaction.",
  },
];

function page() {
  return (
    <div>
      page
      <p>Lists of components below</p>
      <Accordions />
      <Testimonial />
      <DataCard
        price={500}
        initialPrice={1500}
        plan=" 2-Days Plan"
        packages={packages}
      />
      <JobCard
        jobDescription={jobDescription}
        position="Customer Support"
        contract="Lagos, Full Time"
      />
      <ArticlesCard
        articleImage={article}
        heading={"Getting Started on SKICOM"}
        dateSent={"3 Days Ago"}
        subHeading={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution....."
        }
      />
      {/* <Paginations /> */}
    </div>
  );
}
export default page;
