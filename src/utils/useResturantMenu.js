import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useResturantMenu = (resid) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get api call to get the data

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(FETCH_RESTAURANT_URL + resid);
      const json = await data.json();
      //console.log(json);
      setRestaurant(json?.data);
    } catch (error) {
      console.log(error);
    }
  }

  //return resturant
  return restaurant;
};

export default useResturantMenu;
