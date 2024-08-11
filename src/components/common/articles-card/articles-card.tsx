import Image, { StaticImageData } from "next/image";

interface articleCard {
  articleImage: StaticImageData;
  heading: string;
  dateSent: string;
  subHeading: string;
}

const ArticlesCard = ({
  articleImage,
  heading,
  subHeading,
  dateSent,
}: articleCard) => {
  return (
    <main className="w-fit rounded-xl border bg-[#ffff] p-5 px-7">
      <Image
        src={articleImage}
        className="h-[250px] w-[550px] rounded-lg object-cover"
        alt=""
      />

      <div className="my-5 flex items-center justify-between">
        <h1 className="text-xl font-bold">{heading}</h1>

        <span className="text-sm text-gray-600 xl:mr-14">{dateSent}</span>
      </div>

      <p className="max-w-[550px] text-gray-600">{subHeading}</p>
    </main>
  );
};

export default ArticlesCard;
