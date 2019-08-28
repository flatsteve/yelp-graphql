import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { restaurantQuery } from "../data/queries";

const Restaurant = ({ match }) => {
  const { error, loading, data } = useQuery(restaurantQuery, {
    variables: {
      alias: match.params.id
    },
    fetchPolicy: "cache-and-network"
  });

  if (error) {
    return <p>Error :(</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{data.business.name}</h3>

      <p>Phone: {data.business.phone}</p>

      <p>
        Rating: {data.business.rating} ({data.business.review_count} reviews)
      </p>
    </div>
  );
};

export default Restaurant;
