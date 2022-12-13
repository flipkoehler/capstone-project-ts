// This site is for showing a random movie, bassed on the passed movie Array

import { movieData } from "../../assets/data/movieData";
import RandomMoviePicker from "../../components/RandomMoviePicker/RandomMoviePicker";

export default function randomMovie() {
  return (
    <>
      <RandomMoviePicker movieArray={movieData} />
    </>
  );
}
