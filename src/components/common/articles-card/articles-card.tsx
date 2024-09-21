import { StaticImageData } from "next/image";

import BlurImage from "~/components/miscellaneous/blur-image";

interface articleCard {
  articleImage: StaticImageData;
  heading: string;
  dateSent: string;
  subHeading: string;
  // id: number;
}

const ArticlesCard = ({
  articleImage,
  heading,
  subHeading,
  dateSent,
}: articleCard) => {
  return (
    <main className="w-fit rounded-xl border bg-[#ffff] p-5 px-4 lg:px-7">
      <BlurImage
        src={articleImage}
        className="h-[180px] w-[550px] rounded-md object-cover lg:h-[250px] lg:rounded-lg"
        alt=""
      />

      <div className="my-5 flex items-center justify-between">
        <h1 className="whitespace-nowrap text-sm font-bold text-[#090914] lg:text-2xl">
          {heading}
        </h1>

        <span className="whitespace-nowrap text-xs text-gray-600 lg:text-lg xl:mr-14 2xl:mr-7">
          {dateSent}
        </span>
      </div>

      <p className="max-w-[550px] text-sm text-gray-600 lg:text-xl">
        {subHeading}
      </p>
    </main>
  );
};

export default ArticlesCard;
