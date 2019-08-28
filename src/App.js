import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./data/client";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";

import "./App.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <h1>CaterCow</h1>

          <Route path="/" exact component={Search} />

          <Route path="/restaurants/:id" exact component={Restaurant} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
