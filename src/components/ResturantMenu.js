import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./ShimmerUI";

const ResturantMenu = () => {
  const { resid } = useParams();
  const [resturant, setResturant] = useState(null);
  const styleObj = {
    color: "#4a54f1",
  };

  useEffect(() => {
    getResturantsInfo();
  }, []);

  async function getResturantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.93577&lng=77.720821&menuId=" +
        resid
    );
    const json = await data.json();
    console.log(json);
    setResturant(json.data);
  }

  if (!resturant) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h2>{resturant.name}</h2>
        {resturant.cloudinaryImageId ? (
          <img src={IMG_CDN_URL + resturant.cloudinaryImageId} />
        ) : (
          ""
        )}
        <h3>{resturant?.area}</h3>
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.avgRating} stars</h3>
        <h3>{resturant?.costForTwoMsg}</h3>
      </div>
      <div className="menuItem">
        <h1>Menu</h1>
        <ul>
          {Object.values(resturant?.menu?.items).map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <h3 style={styleObj}>Rs {item?.price / 100}</h3>
                <div className="img_right">
                  {item?.cloudinaryImageId ? (
                    <img src={IMG_CDN_URL + item.cloudinaryImageId} />
                  ) : (
                    " "
                  )}
                </div>
                <div className="line"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
