import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";
import { useLocalStorage } from "../utils/useLocalStorage";

const Body = () => {
  const [searchText, setSearchText] = useLocalStorage("textList", "");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [allRestaurants] = useRestaurant(
    setFilterRestaurants,
    filterRestaurants
  );

  const online = useOnline();

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilterRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`No match found for "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilterRestaurants(restaurants);
    }
  };

  if (!online) {
    return <h1> 🔴 Offline!!.Please check your internet connection.</h1>;
  }

  console.log("render");

  if (!allRestaurants) {
    return null;
  }

  //Conditional Rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant"
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => {
            setSearchText(e.target.value);
            // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div className="resturant-list">
        {filterRestaurants.map((resturant) => {
          return (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={"/resturants/" + resturant.data.id}
              key={resturant.data.id}
            >
              <ResturantCard {...resturant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
