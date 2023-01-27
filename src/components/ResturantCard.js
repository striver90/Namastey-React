import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2> {name}</h2>
      <h2> {cuisines.join(", ")}</h2>
      <h4> {lastMileTravelString}</h4>
    </div>
  );
};

export default ResturantCard;
