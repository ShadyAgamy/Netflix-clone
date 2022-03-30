import React from "react";
import Row from "../../shared/Row";
import Banner from "../../shared/Banner";
import Nav from "../../shared/Nav";

const Homepage = ({netflixOriginals,trending, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries }) => {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchedMovies={netflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchedMovies={trending} />
      <Row title="Top Rated" fetchedMovies={topRated} />
      <Row title="Action Movies" fetchedMovies={actionMovies} />
      <Row title="Comedy Movies" fetchedMovies={comedyMovies} />
      <Row title="Horror Movies" fetchedMovies={horrorMovies} />
      <Row title="Romance Movies" fetchedMovies={romanceMovies} />
      <Row title="documentaries " fetchedMovies={documentaries} />
    </>
  );
};

export default Homepage;
