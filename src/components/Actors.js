import React, {Children} from "react";
import { actors } from "../data";

function Actors() {
  const actorDivs = Children.toArray(actors.map(actor => {
    return <div>
      <p>{actor.name}</p>
      <ul>
        {Children.toArray(actor.movies.map(movie => <li>{movie}</li>))}
      </ul>
    </div>
  }))
  return <div>
    <h1>Actors Page</h1>
    {actorDivs}
  </div>;
}

export default Actors;
