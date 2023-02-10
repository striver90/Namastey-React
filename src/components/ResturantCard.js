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
      <h3> {cuisines.join(", ")}</h3>
      <h3> {lastMileTravelString}</h3>
    </div>
  );
};

export default ResturantCard;
