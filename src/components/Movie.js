import React from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else return "red";
};

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img
        src={poster_path ? IMGPATH + poster_path : "../../clement-m-JIOP2qvo8yk-unsplash.jpg"}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag_vote ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
