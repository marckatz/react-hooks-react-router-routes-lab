import React, {Children} from "react";
import { directors } from "../data";

function Directors() {
  const directorDivs = Children.toArray(directors.map(director => {
    return <div>
      <p>{director.name}</p>
      <ul>
        {Children.toArray(director.movies.map(movie => <li>{movie}</li>))}
      </ul>
    </div>
  }))
  return <div>
    <h1>Directors Page</h1>
    {directorDivs}
  </div>;
}

export default Directors;
