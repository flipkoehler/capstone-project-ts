import useFetch from "../../lib/fetch";
import { useRouter } from "next/router";
import RandomMoviePicker from "../../components/RandomMoviePicker/RandomMoviePicker";

export default function randomMovie() {
  const router = useRouter();
  const movieData = useFetch("/api");
  const randomMovie = RandomMoviePicker(movieData);
  if (!randomMovie) {
    return null;
  }
  router.push(`/movies/${randomMovie.id}`);
}
