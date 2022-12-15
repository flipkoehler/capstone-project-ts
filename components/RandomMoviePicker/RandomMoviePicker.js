/// This function is rendering through the passed movie data array and is picking one random movie to show.

import { useEffect, useState } from "react";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";

export default function RandomMoviePicker({ movies }) {
  const [randomPick, setRandomPick] = useState(0); // picks a random number

  useEffect(() => {
    setRandomPick(Math.floor(Math.random() * movies.length));
  }, [movies.length]); // calculates a random number on a page load

  //return the movie details bassed on the random number
  return (
    <>
      <MovieDetailPage passedMovie={movies[randomPick]} />
    </>
  );
}
