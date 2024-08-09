import Image from "next/image";

import check from "../../../public/images/data-card/Check.png";

interface jobProperties {
  jobDescription: {
    id: number;
    description: string;
  }[];

  position: string;
  contract: string;
}

const JobCard = ({ jobDescription, position, contract }: jobProperties) => {
  return (
    <main className="my-3 w-[320px] rounded-xl bg-default p-5">
      <h3 className="text-2xl font-medium text-neutral-dark-1">{position}</h3>

      <p className="text-destructive">{contract}</p>

      <p className="mt-4 text-[16px] font-semibold text-neutral-dark-2">
        Description
      </p>

      <div className="mt-1 h-[0.5px] w-full bg-gray-200"></div>

      <ul className="mt-5 space-y-4">
        {jobDescription.map((item) => (
          <li key={item.id}>
            <div className="flex items-center gap-2">
              <Image src={check} className="h-5 w-5" alt={""} />
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default JobCard;
