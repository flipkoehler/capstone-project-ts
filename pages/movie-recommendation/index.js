// This site is for showing a random movie, based on the passed movie Array

import { movieData } from "../../assets/data/movieData";
import RandomMoviePicker from "../../components/RandomMoviePicker/RandomMoviePicker";

export default function randomMovie() {
  return <RandomMoviePicker movies={movieData} />;
}
