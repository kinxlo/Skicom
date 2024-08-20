import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import ArticlesCard from "~/components/common/articles-card/articles-card";
import one from "../../../../public/images/customer-care/1.png";
import two from "../../../../public/images/customer-care/2.png";
import three from "../../../../public/images/customer-care/3.png";
import four from "../../../../public/images/customer-care/4.png";
import five from "../../../../public/images/customer-care/5.png";
import six from "../../../../public/images/customer-care/6.png";
import seven from "../../../../public/images/customer-care/7.png";
import eight from "../../../../public/images/customer-care/8.png";

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
  {
    id: 3,
    articleImage: three,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 4,
    articleImage: four,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 5,
    articleImage: five,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 6,
    articleImage: six,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 7,
    articleImage: seven,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
  {
    id: 8,
    articleImage: eight,
    heading: "Getting Started on SKICOM",
    dateSent: "3 Days Ago",
    subHeading:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.....",
  },
];

const Articles = () => {
  return (
    <main className="mx-auto w-11/12 py-3 2xl:container lg:py-10">
      <Link
        href={"customer-care"}
        className="flex items-center gap-3 text-sm font-medium text-primary"
      >
        {" "}
        <span>
          <ChevronLeft size={20} />
        </span>{" "}
        Back to Customer Care
      </Link>

      <div className="mt-7">
        <h2 className="text-2xl font-semibold text-neutral-dark-1">
          All Articles
        </h2>
        <p className="mt-1 text-sm">
          Read everything you need to know about our products and services.
        </p>
      </div>

      <section>
        <div className="mt-8 grid w-full grid-cols-1 gap-7 lg:grid-cols-2 2xl:grid-cols-3">
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

        <div className="mt-7 text-center text-sm">Pagination</div>
      </section>
    </main>
  );
};

export default Articles;
