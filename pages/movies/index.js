// this page is not linked in the app. It is just a quick overview for me to see the movies. Further on in the project this page will be removed.
import { movieData } from "../../assets/data/movieData";

export default function Movies() {
  return (
    <>
      <h1>List of the movies</h1>
      <ul>
        {movieData.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </>
  );
}
