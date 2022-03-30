import React from "react";
import "./styles.scss";

const posterBaseUrl = "https://image.tmdb.org/t/p/original";



const MoviesListPage = ({ movies }) => {
  console.log(movies);
  return (
    <div className="moviesList">
      {movies?.map((movie) => {
        return (
          <img
            key={movie.id}
            src={`${posterBaseUrl}${movie.backdrop_path}`}
            alt={movie.name}
          />
        );
      })}
    </div>
  );
};

export default MoviesListPage;
