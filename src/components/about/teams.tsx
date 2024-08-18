import Image from "next/image";

import teams from "../../../public/images/about/teams.png";

const Teams = () => {
  return (
    <main className="mx-auto w-11/12 2xl:container">
      <div className="pt-14 text-center">
        <h4 className="mb-2 text-3xl text-primary">Meet Our Team</h4>
        <p className="mx-auto max-w-lg text-[#292929]">
          Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
          feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
          Duis posuere venenatis et amet sed.{" "}
        </p>

        <Image
          src={teams}
          alt="teams-img"
          className="h-68 mt-20 object-cover"
        />
      </div>
    </main>
  );
};

export default Teams;
