import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { movieData } from "../../assets/data/movieData";

export default function MovieQuiz() {
  const router = useRouter();
  const [movieDataFiltered, setMovieDataFiltered] = useState(movieData); // sets the filtered movie data array (import for the next steps)

  function handleButton(passedRuntime) {
    // step 1: filter through the array and create an new one "step1movies"
    const step1movies = movieDataFiltered.filter((movie) => {
      if (passedRuntime === "short") {
        return movie.runtime <= 100;
      }
      if (passedRuntime === "middle") {
        return movie.runtime >= 100 && movie.runtime <= 140;
      }
      if (passedRuntime === "long") {
        return movie.runtime >= 140;
      } else return movieData;
    });

    setMovieDataFiltered(step1movies);

    // step 2: create a random number between 0 and the new array length
    const randomNumber = Math.floor(Math.random() * step1movies.length);

    // step 3: navigate to the new page
    router.push(`/movies/${step1movies[randomNumber].id}`);
  }

  return (
    <>
      <section>
        <h1>Wie lange darf dein Film heute dauern?</h1>
        <button onClick={() => handleButton("short")}>Nur kurz</button>
        <button onClick={() => handleButton("middle")}>
          Normale Lauflänge
        </button>
        <button onClick={() => handleButton("long")}>Ich habe Zeit</button>
        <StyledLink2 href="/movie-recommendation">ist mir egal</StyledLink2>
      </section>
    </>
  );
}

const StyledLink2 = styled(Link)`
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--smokey-black);
`;
