// The following Routing function grabs the url id and compares it to the movie.id, than generates a movie detail page

import { useRouter } from "next/router";
import MovieDetailPage from "../../components/MovieDetailPage/MovieDetailPage";
import useFetch from "../../lib/fetch";

export default function MovieId() {
  const movieData = useFetch("/api/movies");
  // wird zu https://movieflip.vercel.app/

  const router = useRouter();
  const passedUrl = parseInt(router.query.id);
  const currentMovie = movieData.find((movie) => movie.id === passedUrl);

  console.log(movieData);
  if (!currentMovie) {
    return null;
  }

  return (
    <>
      <MovieDetailPage passedMovie={currentMovie} />
    </>
  );
}
