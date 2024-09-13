"use client";

// import "./data-card.css";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();

  return (
    <div
      className={`card relative rounded-[2rem] bg-[url('/images/home/card-clip-bg.png')] ${pathName === "/services" ? "w-[300px]" : "w-[400px]"} p-[43px]`}
    >
      <div className="mt-3 flex items-center gap-4">
        <p className="text-6xl font-semibold text-neutral-dark-1">#{price}</p>
        <p className="text-3xl font-medium text-red-600 line-through">
          {initialPrice && "#"}
          {initialPrice}
        </p>
      </div>

      <p className="my-3 mt-8 text-2xl font-bold text-neutral-dark-2 xl:text-4xl">
        {plan}
      </p>

      <div className="mt-5 h-[0.5px] w-full bg-gray-300"></div>

      <ul className="mt-5 space-y-2.5">
        {packages.map((item) => (
          <li key={item.id}>
            <div className="mt-5 flex items-center gap-2">
              <Image src={check} className="h-6 w-6" alt={""} />
              <p className="text-[16px] text-gray-500">{item.data}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="absolute bottom-[43px] right-[43px] rounded-full bg-[#EFEFEF] p-2">
        <ChevronRight size={33} />
      </button>
    </div>
  );
};

export default DataCard;
