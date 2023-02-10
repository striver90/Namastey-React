import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant.data?.name
      .toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });
  // if (filterData == "") {
  //   console.log("Search Item Not Found!!!");
  //   return restaurants;
  // }
  return filterData;
}

const Body = () => {
  //const searchTxt = "KFC";
  const [searchInput, setSearchInput] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [hasError, setHasError] = useState(false);

  //empty dependencies array=> only call once after render
  // depdency array [searchInput]=> once after initial render + everytime after the searchInput state changes

  useEffect(() => {
    //API call
    getResturants();
  }, []);

  async function getResturants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch {
      setHasError(true);
    }
  }

  console.log("render");

  if (!allRestaurants) {
    return null;
  }

  // if (filterRestaurants.length == 0)
  //   return <h1>No Resturant match your filter!!!</h1>;

  //Conditional Rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchInput, allRestaurants);
            // update the resturantlist.
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resturant-list">
        {!hasError &&
          filterRestaurants.map((resturant) => {
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
