import React from "react";
import MemoizedRow from "../../shared/Row";
import Banner from "../../shared/Banner";
import Nav from "../../shared/Nav";
import NetflixOriginals from "../NetflixOriginals";

const Homepage = ({netflixOriginals,trending, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries }) => {
  return (
    <>
      <Nav />
      <Banner />
      <MemoizedRow
        title="NETFLIX ORIGINAL"
        routePath={"NetflixOriginals"}
        fetchedMovies={netflixOriginals}
        isLargeRow
      />
      <MemoizedRow title="TRENDING NOW" fetchedMovies={trending}  routePath={"trending"}  />
      <MemoizedRow title="Top Rated" fetchedMovies={topRated} routePath={"topRated"} />
      <MemoizedRow title="Action Movies" fetchedMovies={actionMovies} routePath={"actionMovies"} />
      <MemoizedRow title="Comedy Movies" fetchedMovies={comedyMovies} routePath={"comedyMovies"} />
      <MemoizedRow title="Horror Movies" fetchedMovies={horrorMovies} routePath={"horrorMovies"} />
      <MemoizedRow title="Romance Movies" fetchedMovies={romanceMovies} routePath={"romanceMovies"} />
      <MemoizedRow title="documentaries " fetchedMovies={documentaries} routePath={"documentaries"} />
    </>
  );
};

export default Homepage;
