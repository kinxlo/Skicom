import "./data-card.css";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

import check from "../../../../public/images/data-card/Check.png";

interface cardProperties {
  price: number;
  initialPrice: number | undefined;
  plan: string;
  packages: {
    id: number;
    data: string;
  }[];
}

const DataCard = ({ price, initialPrice, plan, packages }: cardProperties) => {
  return (
    <main className="card relative z-10 h-[320px] w-[290px] bg-white p-5">
      <div className="mt-3 flex items-center gap-4">
        <p className="text-4xl font-semibold text-neutral-dark-1">#{price}</p>
        <p className="text-xl font-medium text-red-600 line-through">
          {initialPrice && "#"}
          {initialPrice}
        </p>
      </div>

      <p className="my-3 text-lg font-bold text-neutral-dark-2 xl:text-3xl">
        {plan}
      </p>

      <div className="h-[0.5px] w-full bg-gray-300"></div>

      <ul className="mt-5 space-y-2.5">
        {packages.map((item) => (
          <li key={item.id}>
            <div className="flex items-center gap-2">
              <Image src={check} className="h-5 w-5" alt={""} />
              <p className="text-xs text-gray-500">{item.data}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="absolute bottom-7 right-3 rounded-full bg-[#EFEFEF] p-2">
        <ChevronRight />
      </button>
    </main>
  );
};

export default DataCard;
