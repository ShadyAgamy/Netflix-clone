import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import Video from "../Video";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "./styles.scss";

const posterBaseUrl = "https://image.tmdb.org/t/p/original";

SwiperCore.use([Navigation]);

function Row({ title, fetchedMovies, isLargeRow, routePath }) {
  
console.log({fetchedMovies})
  const [previewMovie, setPreviewMovie] = useState("");


  const handelClick = (movie) => {
    setPreviewMovie(movie);
  };

  return (
    <div className="row">
      <div className="row__title">
        <Link to={routePath}>
          <h2>
            {title} <span>Explore all </span>{" "}
            <FontAwesomeIcon icon={faAnglesRight} />
          </h2>
        </Link>
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

        {fetchedMovies?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <img
                onClick={() => handelClick(movie)}
                key={movie.id}
                className={`row__poster`}
                src={`${posterBaseUrl}${movie.poster_path}`}
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


const MemoizedRow = React.memo(Row);
export default MemoizedRow;