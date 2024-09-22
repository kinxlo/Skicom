import { ChevronRight } from "lucide-react";
import Image from "next/image";

import check from "../../../public/images/data-card/Check.png";
import CustomButton from "../common/common-button/common-button";

interface jobProperties {
  jobDescription: {
    id: number;
    descriptions: string;
  }[];

  position: string;
  contract: string;
  opening: string;
}

const JobCard = ({
  jobDescription,
  position,
  contract,
  opening,
}: jobProperties) => {
  return (
    <main className="my-3 min-h-[460px] max-w-[263px] rounded-[27px] bg-default p-[18px] lg:max-w-[400px] lg:p-[28px]">
      <h3 className="text-[19px] font-medium text-neutral-dark-1 xl:text-[30px]">
        {position}
      </h3>

      <p className="text-[13px] text-destructive xl:text-[20px]">
        {contract}, {opening}
      </p>

      <p className="mt-4 text-[13px] font-semibold text-neutral-dark-2 xl:text-[20px]">
        Description
      </p>

      <div className="mt-1 h-[0.5px] w-full bg-gray-200"></div>

      <ul className="mt-5 space-y-4">
        {jobDescription.map((item) => (
          <li key={item.id}>
            <div className="flex gap-2 lg:pr-[25px]">
              <Image
                src={check}
                className="w-[15px h-[15px] xl:h-[24px] xl:w-[24px]"
                alt={"check"}
              />
              <p className="text-[12px] text-gray-500 xl:text-[16px]">
                {item.descriptions}
              </p>
            </div>
          </li>
        ))}
        <CustomButton
          variant="primary"
          className="h-12 w-full rounded-full text-[16px]"
        >
          Apply Now{" "}
          <span>
            {" "}
            <ChevronRight size={16} />
          </span>
        </CustomButton>
      </ul>
    </main>
  );
};

export default JobCard;
