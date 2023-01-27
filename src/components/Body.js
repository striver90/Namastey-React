import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant.data?.name
      .toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });
  if (filterData == "") {
    return restaurants;
  }
  return filterData;
}

const Body = () => {
  //const searchTxt = "KFC";
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(resturantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //filter the search Text
            const data = filterData(searchInput, restaurants);
            // update the resturantlist.
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resturant-list">
        {restaurants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
