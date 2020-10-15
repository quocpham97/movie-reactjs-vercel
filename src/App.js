import React, { useState, useEffect } from "react";

import Movie from "./components/Movie";

// const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setMovies(data.results);
      })
    );
  };
  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const submitSearchTerm = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      setSearchTerm("");
    }
  };

  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={submitSearchTerm}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onChangeSearchTerm}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
