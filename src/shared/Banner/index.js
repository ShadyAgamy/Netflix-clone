import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios";
import requests from "../../requests";
import "./styles.scss";

const posterBaseUrl = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [description, setDescription] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
     console.log('run after 4 seconds');
     setDescription(!description)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  let truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
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
        <h2 className={`banner_description ${!description? 'height-0': ''}`}>{truncate(movie?.overview, 150)}</h2>
        <div className="banner__buttons">
          <button className="banner_button ">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>
          <button className="banner_button transparent">
            <FontAwesomeIcon icon={faCircleExclamation} />
            My List
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
