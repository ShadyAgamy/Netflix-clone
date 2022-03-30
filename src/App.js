import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"

import requests from "./requests";
import axios from "./axios";

import Homepage from "./pages/Homepage";
import NetflixOriginals from "./pages/NetflixOriginals";
import Trending from "./pages/Trending";
import TopRated from "./pages/TopRated";
import ActionMovies from "./pages/ActionMovies";
import ComedyMovies from "./pages/ComedyMovies";
import HorrorMovies from "./pages/HorrorMovies";
import RomanceMovies from "./pages/RomanceMovies";
import Documentaries from "./pages/Documentaries";

import "./App.css";
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

       
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div className="app">
        <Routes>
        <Route path="/" element={  <Homepage netflixOriginals={netflixOriginals} trending={trending} topRated={topRated} actionMovies={actionMovies} comedyMovies={comedyMovies} horrorMovies={horrorMovies} romanceMovies={romanceMovies} documentaries={documentaries}/> } />

        <Route path="/NetflixOriginals" element={ <NetflixOriginals data={netflixOriginals}/> } />
        <Route path="/trending" element={ <Trending data={trending}/> } />
        <Route path="/topRated" element={ <TopRated data={topRated}/> } />
        <Route path="/actionMovies" element={ <ActionMovies data={actionMovies}/> } />
        <Route path="/comedyMovies" element={ <ComedyMovies data={comedyMovies}/> } />
        <Route path="/horrorMovies" element={ <HorrorMovies data={horrorMovies}/> } />
        <Route path="/romanceMovies" element={ <RomanceMovies data={romanceMovies}/> } />
        <Route path="/documentaries" element={ <Documentaries data={documentaries}/> } />
      </Routes>
    
    </div>
  );
}

export default App;
