import React, { useState } from "react";

import RestaurantListItem from "./RestaurantListItem";

const RestaurantResults = ({ loading, error, data, fetchMore }) => {
  const [fetchingMore, updateFetchingMore] = useState(false);

  if (error) {
    return <p>Error :(</p>;
  }

  if (loading && !fetchingMore) {
    return <p>Loading...</p>;
  }

  const onLoadMore = () => {
    updateFetchingMore(true);

    fetchMore({
      variables: {
        offset: data.search.business.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return {
          search: {
            ...prev.search,
            business: [
              ...prev.search.business,
              ...fetchMoreResult.search.business
            ]
          }
        };
      }
    }).finally(() => {
      updateFetchingMore(false);
    });
  };

  return (
    <div>
      <h3>Total restaurants: {data.search.total}</h3>

      {data.search.business.map(restaurant => {
        return (
          <RestaurantListItem restaurant={restaurant} key={restaurant.id} />
        );
      })}

      {fetchingMore && <p>Loading more data...</p>}

      {data.search.business.length < data.search.total && (
        <button onClick={onLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default RestaurantResults;
