import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { restaurantSearchQuery } from "../data/queries";
import Locations from "./Locations";
import Prices from "./Prices";
import RestaurantResults from "./RestaurantResults";

import "./Search.scss";

const Search = () => {
  const defaultSearchData = { location: "New York", price: "" };
  const searchData =
    JSON.parse(localStorage.getItem("cc__search_data")) || defaultSearchData;

  const [location, updateLocation] = useState(searchData.location);
  const [price, updatePrice] = useState(searchData.price);

  const { error, loading, data, fetchMore } = useQuery(restaurantSearchQuery, {
    variables: {
      location,
      price,
      offset: 0,
      limit: 5
    },
    fetchPolicy: "cache-and-network"
  });

  useEffect(() => {
    localStorage.setItem(
      "cc__search_data",
      JSON.stringify({ location, price })
    );
  }, [location, price]);

  return (
    <div className="Search">
      <div className="Search__controls">
        <Locations location={location} updateLocation={updateLocation} />

        <Prices price={price} updatePrice={updatePrice} />
      </div>

      <RestaurantResults
        error={error}
        loading={loading}
        data={data}
        fetchMore={fetchMore}
      />
    </div>
  );
};

export default Search;
