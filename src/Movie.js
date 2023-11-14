import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section >
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <section className="container movie-page">
      <div className="grid grid-4-col">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const  movieName = Title.substring(0,15);

          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length >= 15 ? `${movieName}....` : movieName}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
