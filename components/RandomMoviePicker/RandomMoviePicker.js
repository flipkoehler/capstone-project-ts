/// This function is rendering through the passed movie data array and is picking one random movie to show.

import useFetch from "../../lib/fetch";
import { useRouter } from "next/router";

export default function RandomMoviePicker() {
  const movieData = useFetch("http://localhost:3000/api/");
  const router = useRouter();
  const randomNumber = Math.floor(Math.random() * movieData.length);
  const pickedMovie = movieData[randomNumber];
  if (!pickedMovie) {
    return null;
  }
  router.push(`/movies/${pickedMovie.id}`);
}
