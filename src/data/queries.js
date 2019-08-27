import { gql } from "apollo-boost";

const RESTAURANTS_TERM = "restaurants";

export const restaurantSearchQuery = gql`
  query($location: String!, $price: String!, $offset: Int, $limit: Int) {
    search(
      term: "${RESTAURANTS_TERM}"
      location: $location
      price: $price
      limit: $limit
      offset: $offset
    ) {
      total
      business {
        id
        name
        url
      }
    }
  }
`;
