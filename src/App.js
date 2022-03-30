import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";

import requests from "./requests";
import axios from "./axios";
const fetchArray = [
  "fetchNetflixOriginals",
  "fetchTrending",
  "fetchTopRated",
  "fetchActionMovies",
  "fetchComedyMovies",
  "fetchHorrorMovies",
  "fetchRomanceMovies",
  "fetchDocumentaries",
];

function App() {
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      for (const category of fetchArray) {
        try {
          const request = await axios.get(requests[category]);
          switch (category) {
            case "fetchNetflixOriginals":
              setNetflixOriginals(request.data.results);
              break;
            case "fetchTrending":
              setTrending(request.data.results);
              break;
            case "fetchTopRated":
              setTopRated(request.data.results);
              break;
            case "fetchActionMovies":
              setActionMovies(request.data.results);
              break;
            case "fetchComedyMovies":
              setComedyMovies(request.data.results);
              break;
            case "fetchHorrorMovies":
              setHorrorMovies(request.data.results);
              break;
            case "fetchRomanceMovies":
              setRomanceMovies(request.data.results);
              break;
            case "fetchDocumentaries":
              setDocumentaries(request.data.results);
              break;
            default:
              break;
          }

          console.log(request.data.results);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
     <Homepage netflixOriginals={netflixOriginals} trending={trending} topRated={topRated} actionMovies={actionMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} romanceMovies={romanceMovies} documentaries={documentaries}/>
    </div>
  );
}

export default App;
