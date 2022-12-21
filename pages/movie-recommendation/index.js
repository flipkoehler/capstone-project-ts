import useFetch from "../../lib/fetch";
import { useRouter } from "next/router";
import randomMoviePicker from "../../lib/randomMoviePicker";

export default function randomMovie() {
  const router = useRouter();
  const movieData = useFetch("/api");
  const randomMovie = randomMoviePicker(movieData);
  if (!randomMovie) {
    return null;
  }
  router.push(`/movies/${randomMovie.id}`);
}
