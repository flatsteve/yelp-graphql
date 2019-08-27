import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./data/client";
import Search from "./components/Search";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>CaterCow</h1>

        <Search />
      </div>
    </ApolloProvider>
  );
}

export default App;
