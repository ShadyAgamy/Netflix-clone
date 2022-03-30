import React from "react";
import Nav from "../../shared/Nav";
import MoviesListPage from "../MoviesListPage";

function Documentaries({ data }) {

  return (
    <>
      <Nav />
      <MoviesListPage movies={data} />
    </>
  );
}

export default Documentaries;
