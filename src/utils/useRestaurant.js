import { useState, useEffect } from "react";

const useRestaurant = (setFilterRestaurants, filterRestaurants) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [hasError, setHasError] = useState(false);

  async function getResturants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log("filterRestaurants length -- ", filterRestaurants.length);
      if (filterRestaurants.length == 0) {
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }
    } catch {
      setHasError(true);
    }
  }

  useEffect(() => {
    //API call
    getResturants();
  }, []);

  return [allRestaurants, hasError];
};

export default useRestaurant;
