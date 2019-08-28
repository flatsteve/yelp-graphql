import React from "react";
import { Link } from "react-router-dom";

import "./RestaurantListItem.scss";

const RestaurantListItem = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurants/${restaurant.alias}`}
      className="RestaurantListItem"
    >
      <img src={restaurant.photos[0]} alt={restaurant.name} />

      <div className="RestaurantListItem__details">
        <p>{restaurant.name}</p>
        <p>Rating: {restaurant.rating}</p>
      </div>
    </Link>
  );
};

export default RestaurantListItem;
