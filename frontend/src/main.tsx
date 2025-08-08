import { ApolloProvider } from "@apollo/client";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import { client } from "./lib/apolloClient.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pokemon/:id" element={<PokemonDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
