import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./styles.scss";

const posterBaseUrl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
    }
    fetchData();
  }, []);
  console.log(movie);

  let truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${posterBaseUrl}/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">

        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>

      </div>

      <div className="banner--fadeBottom"></div>

    </header>
  );
}

export default Banner;
