/// This function is rendering through the passed movie data array and is picking one random movie to show.

import { useEffect, useState } from "react";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";

export default function RandomMoviePicker({ movies }) {
  const [randomPick, setRandomPick] = useState(0); // picks a random number
  const listItems = movies.map((movie) => <li key={movie.id}></li>); // map through the movie Array
  const productionYear = movies[randomPick].release_date.slice(0, 4); // slices down the production year, e.g. 2014-12-04 > 2014
  useEffect(() => {
    setRandomPick(Math.floor(Math.random() * listItems.length));
  }, [listItems.length]); // calculates a random number on a page load

  //return the movie details bassed on the random number
  return (
    <>
      <MovieDetailPage passedMovie={movies[randomPick]} />
    </>
  );
}
