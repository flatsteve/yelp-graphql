import { gql } from "apollo-boost";

export const restaurantSearchQuery = gql`
  query($location: String!, $price: String!, $offset: Int, $limit: Int) {
    search(
      term: "restaurants"
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
