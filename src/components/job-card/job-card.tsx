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
    <main className="my-3 h-[460px] w-[400px] rounded-xl bg-default p-5">
      <h3 className="text-2xl font-medium text-neutral-dark-1">{position}</h3>

      <p className="text-destructive">
        {contract}, {opening}
      </p>

      <p className="mt-4 text-[16px] font-semibold text-neutral-dark-2">
        Description
      </p>

      <div className="mt-1 h-[0.5px] w-full bg-gray-200"></div>

      <ul className="mt-5 space-y-4">
        {jobDescription.map((item) => (
          <li key={item.id}>
            <div className="flex gap-2">
              <Image src={check} className="h-6 w-6" alt={""} />
              <p className="text-[16px] text-gray-500">{item.descriptions}</p>
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
