interface IStarRatingProperties {
  rating: number;
}
interface IStarProperties {
  filled: boolean;
}

const Star = ({ filled }: IStarProperties) => {
  return filled ? (
    <span className="text-neutral-dark-1 xl:text-2xl">★</span>
  ) : (
    <span className="xl:text-2x text-gray-400">☆</span>
  );
};

const StarRating = ({ rating }: IStarRatingProperties) => {
  const totalStars = 5;
  const stars = [];

  for (let index = 1; index <= totalStars; index++) {
    stars.push(<Star key={index} filled={index <= rating} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
