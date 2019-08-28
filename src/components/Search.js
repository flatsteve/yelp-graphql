import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { restaurantSearchQuery } from "../data/queries";
import Locations from "./Locations";
import Prices from "./Prices";
import RestaurantResults from "./RestaurantResults";

import "./Search.scss";

const Search = () => {
  const [price, updatePrice] = useState("");
  const [location, updateLocation] = useState("New York");
  const { error, loading, data, fetchMore } = useQuery(restaurantSearchQuery, {
    variables: {
      location,
      price,
      offset: 0,
      limit: 5
    },
    fetchPolicy: "cache-and-network"
  });

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
