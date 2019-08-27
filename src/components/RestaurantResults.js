import React, { useState } from "react";

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
      <h3>Total restaurants found: {data.total}</h3>

      {data.search.business.map(restaurant => {
        return (
          <div key={restaurant.id}>
            <p>{restaurant.name}</p>
          </div>
        );
      })}

      {fetchingMore && <p>Loading more data...</p>}

      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default RestaurantResults;
