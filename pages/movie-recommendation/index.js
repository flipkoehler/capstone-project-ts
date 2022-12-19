// This site is for showing a random movie, based on the passed movie Array

import RandomMoviePicker from "../../components/RandomMoviePicker/RandomMoviePicker";
import useFetch from "../../lib/fetch";

export default function randomMovie() {
  const movieData = useFetch("http://localhost:3000/api/");
  console.log(movieData);
  return <RandomMoviePicker movies={movieData} />;
}
