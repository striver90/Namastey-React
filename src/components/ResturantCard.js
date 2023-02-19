import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  area,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3> {name}</h3>
      <h5> {cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h3
          style={
            avgRating < 4
              ? {
                  backgroundColor: "#db7c38",
                }
              : avgRating == "--"
              ? {
                  backgroundColor: "white",
                  color: "black",
                }
              : {
                  color: "white",
                }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h3>

        <h3> • </h3>
        <h3>{lastMileTravelString}</h3>
        <h3> • </h3>
        <h3>{costForTwoString}</h3>
      </span>
    </div>
  );
};

export default ResturantCard;
