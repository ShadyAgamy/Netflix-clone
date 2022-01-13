import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Video({ movie }) {
  console.log("Video component monted");
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
   
      console.log(movie?.name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    
  }, [movie, trailerUrl]);

  return <YouTube videoId={trailerUrl} opts={opts} />;
}

export default Video;
