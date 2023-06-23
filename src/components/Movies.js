import React, {Children} from "react";
import { movies } from "../data";

function Movies() {
  const movieDivs = Children.toArray(movies.map(movie => {
    return <div>
      <p>{movie.title}</p>
      <p>{movie.time}</p>
      <ul>
        {Children.toArray(movie.genres.map(g => <li>{g}</li>))}
      </ul>
    </div>
  }))
  return <div>
    <h1>Movies Page</h1>
    {movieDivs}
  </div>;
}

export default Movies;
