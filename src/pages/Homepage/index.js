import React from "react";
import Row from "../../shared/Row";
import Banner from "../../shared/Banner";
import Nav from "../../shared/Nav";
import NetflixOriginals from "../NetflixOriginals";

const Homepage = ({netflixOriginals,trending, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries }) => {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        routePath={"NetflixOriginals"}
        fetchedMovies={netflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchedMovies={trending}  routePath={"trending"}  />
      <Row title="Top Rated" fetchedMovies={topRated} routePath={"topRated"} />
      <Row title="Action Movies" fetchedMovies={actionMovies} routePath={"actionMovies"} />
      <Row title="Comedy Movies" fetchedMovies={comedyMovies} routePath={"comedyMovies"} />
      <Row title="Horror Movies" fetchedMovies={horrorMovies} routePath={"horrorMovies"} />
      <Row title="Romance Movies" fetchedMovies={romanceMovies} routePath={"romanceMovies"} />
      <Row title="documentaries " fetchedMovies={documentaries} routePath={"documentaries"} />
    </>
  );
};

export default Homepage;
