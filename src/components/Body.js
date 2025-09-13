import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";

import useRestaurantsData from "../utils/useRestaurantsData";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useCheckOnlineStatus();



  // fetch restaurants (your hook)
  
  const restaurants = useRestaurantsData();
 
  // when restaurants arrive, show them by default
  useEffect(() => {
    if (Array.isArray(restaurants) && restaurants.length > 0) {
      setFilteredRestaurants(restaurants);
    }
  }, [restaurants]);

  const filterTopRatedRestaurant = () => {
    if (!Array.isArray(restaurants)) return;
    const filteredList = restaurants.filter((res) => {
      const rating = parseFloat(res?.info?.avgRating ?? "0");
      return rating > 4.5;
    });
    setFilteredRestaurants(filteredList);
  };

  const searchData = () => {
    if (!Array.isArray(restaurants)) return;
    const searchResults = restaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilteredRestaurants(searchResults);
  };
 if (!isOnline) {
    return (
      <h1>
        {"🔴"} You are offline!! Please check your internet connection
      </h1>
    );
  }
  return (
    <div className="p-4">
      <div className="mb-4">
        <button className="border border-gray-500 text-black font-bold shadow rounded-xl p-2 cursor-pointer" onClick={filterTopRatedRestaurant}>
          Top Rated Restaurants
        </button>

        <input
          type="text"
          className="border border-gray-500 text-black font-bold shadow  p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchData();
          }}
        />
        <button className="border border-gray-500 p-2 w-20 rounded-2xl cursor-pointer" onClick={searchData}>
          Search
        </button>
      </div>

      {/* Show shimmer while loading */}
      {(!restaurants || restaurants.length === 0) && <ShimmerUi />}

      {/* Show results or 'no results' */}
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <>
          {filteredRestaurants && filteredRestaurants.length > 0 ? (
            <div className="flex gap-5 flex-wrap cursor-pointer">
              {filteredRestaurants.map((restaurant, idx) => {
                const key =
                  restaurant?.info?.id ?? restaurant?.id ?? `${restaurant?.info?.name ?? "r"}-${idx}`;
                return (
                  <RestaurantCard key={key} restaurant={restaurant} />
                );
              })}
            </div>
          ) : (
            <p>No restaurants found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Body;
