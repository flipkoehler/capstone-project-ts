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
