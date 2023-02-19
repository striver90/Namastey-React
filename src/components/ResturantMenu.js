import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./ShimmerUI";
import useResturant from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resid } = useParams();
  const styleObj = {
    color: "#4a54f1",
  };

  const restaurant = useResturant(resid);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        ></img>

        <div className="restaurant-summary-deatils">
          <h2>{restaurant.name}</h2>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <span>
            <h3
              style={
                restaurant?.avgRating < 4
                  ? {
                      backgroundColor: "#db7c38",
                    }
                  : restaurant?.avgRating == "--"
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
              {restaurant?.avgRating}
            </h3>
            <h3 className="restaurant-rating-slash"> | </h3>
            <h3 className="resturant-sla">{restaurant?.sla?.slaString}</h3>
            <h3 className="restaurant-rating-slash"> | </h3>
            <h3 className="resturant-cost">{restaurant?.costForTwoMsg}</h3>
          </span>
        </div>
      </div>
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-item-length">
              {Object.keys(restaurant?.menu?.items).length} ITEMS
            </p>
          </div>

          <div className="menu-items-list">
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => {
                return (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-item-details">
                      <h3 className="item-title">{item.name}</h3>
                      <p className="item-cost">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                      <p className="item-desc">{item?.description}</p>{" "}
                    </div>

                    <div className="menu-img-wrapper">
                      {item?.cloudinaryImageId ? (
                        <img
                          className="menu-item-img"
                          src={IMG_CDN_URL + item.cloudinaryImageId}
                        />
                      ) : (
                        " "
                      )}
                      <button className="add-btn"> ADD +</button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
