import React, { useState, useEffect } from "react";
import Video from "../Video";
import axios from "../../axios";
import "./styles.scss";
const posterBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [previewMovie, setPreviewMovie] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handelClick = movie => {
    setPreviewMovie(movie)
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
            onClick={() => handelClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow? 'row__poster--large': ''}`}
              src={`${posterBaseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
        
      </div>
       {previewMovie ? <Video movie={previewMovie} /> : null} 
    </div>
  );
}

export default Row;
