import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Video from "../Video";

import "swiper/swiper-bundle.min.css";
import "./styles.scss";

const posterBaseUrl = "https://image.tmdb.org/t/p/original";

SwiperCore.use([Navigation]);

function Row({ title, fetchedMovies, isLargeRow }) {
  
  const [movies, setMovies] = useState(fetchedMovies);
  const [previewMovie, setPreviewMovie] = useState("");

  useEffect(() => {
    setMovies(fetchedMovies)
  }, [fetchedMovies]);

  console.log(movies)

  const handelClick = (movie) => {
    setPreviewMovie(movie);
  };

  return (
    <div className="row">
      <div className="row__title">
      <h2 >{title} <span>Explore all </span> <FontAwesomeIcon icon={faAnglesRight} /></h2>
      </div>
     
      <Swiper
        className="row__posters"
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        <div className="custom_next">
        <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="custom_prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        {movies.map((movie) => {
          return (
            <SwiperSlide>
              <img
                onClick={() => handelClick(movie)}
                key={movie.id}
                className={`row__poster`}
                src={`${posterBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div></div>
      {previewMovie ? <Video movie={previewMovie} /> : null}
    </div>
  );
}

export default Row;

