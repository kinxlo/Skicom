import role from "../../../public/images/about/role.png";
import teams from "../../../public/images/about/teams.png";
import BlurImage from "../miscellaneous/blur-image";

const Teams = () => {
  return (
    <main className="mx-auto mt-3 w-11/12 2xl:container">
      <div className="pt-14 text-center">
        <h4 className="mb-2 text-3xl text-primary">Meet Our Team</h4>
        <p className="mx-auto max-w-lg text-[#292929]">
          Lorem ipsum dolor sit amet consectetur. Lorem libero arcu ut venenatis
          feugiat lacus. Elit tellus morbi quis a aliquam mi pretium nam donec.
          Duis posuere venenatis et amet sed.{" "}
        </p>

        <div className="relative">
          <BlurImage
            src={teams}
            alt="teams-img"
            className="mt-20 h-[140px] object-cover lg:h-[260px]"
          />
          <BlurImage
            src={role}
            alt="teams-img"
            className="absolute -top-14 left-1/2 h-[70px] w-[140px] -translate-x-1/2 transform"
          />
        </div>
      </div>
    </main>
  );
};

export default Teams;
