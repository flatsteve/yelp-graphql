import React from "react";

const RestaurantResults = ({ loading, error, data, fetchMore }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const onLoadMore = () => {
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

      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default RestaurantResults;
