// The following Routing function grabs the url id and compares it to the movie.id, than generates a movie detail page

import { useRouter } from "next/router";
import { movieData } from "../../assets/data/movieData";
import MovieDetailPage from "../../components/MovieDetailPage/MovieDetailPage";

export default function MovieId() {
  const router = useRouter();
  const passedUrl = parseInt(router.query.id);
  const currentMovie = movieData.find((movie) => movie.id === passedUrl);

  if (!currentMovie) {
    return null;
  }

  return (
    <>
      <MovieDetailPage passedMovie={currentMovie} />
    </>
  );
}
