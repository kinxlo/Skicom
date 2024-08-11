import "./data-card.css";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

import check from "../../../../public/images/data-card/Check.png";

const DataCard = () => {
  // Hard coded data's will be removed in the future
  return (
    <main className="card relative h-[320px] w-[290px] bg-white p-5">
      <div className="mt-3 flex items-center gap-4">
        <p className="text-4xl font-semibold text-neutral-dark-1">#500</p>
        <p className="text-xl font-medium text-red-600 line-through">#1500</p>
      </div>

      <p className="my-3 text-lg font-bold text-neutral-dark-2 xl:text-3xl">
        2-Days Plan
      </p>

      <div className="h-[0.5px] w-full bg-gray-300"></div>

      <ul className="mt-5 space-y-2.5">
        <li>
          <div className="flex items-center gap-2">
            <Image src={check} className="h-5 w-5" alt={""} />
            <p className="text-xs text-gray-500">Locally NG</p>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <Image src={check} className="h-5 w-5" alt={""} />
            <p className="text-xs text-gray-500">Valid for 2days</p>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <Image src={check} className="h-5 w-5" alt={""} />
            <p className="text-xs text-gray-500">Lorem ipsum hes</p>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <Image src={check} className="h-5 w-5" alt={""} />
            <p className="text-xs text-gray-500">Due tndcadadd</p>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <Image src={check} className="h-5 w-5" alt={""} />
            <p className="text-xs text-gray-500">advsdv svd ssvc dvs</p>
          </div>
        </li>
      </ul>

      <button className="absolute bottom-7 right-3 rounded-full bg-[#EFEFEF] p-2">
        <ChevronRight />
      </button>
    </main>
  );
};

export default DataCard;
