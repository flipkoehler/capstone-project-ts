import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { movieData } from "../../assets/data/movieData";

export default function MovieQuiz() {
  const router = useRouter();
  const [quizStep, setQuizStep] = useState(0); // sets the step the user is currently at the quiz
  const [movieDataStep1, setMovieDataStep1] = useState(movieData); // sets the filtered movie data array
  const [randomPick, setRandomPick] = useState(null); // picks a random number for choosing one movie out of the filtered array

  function handleButton(passedRuntime) {
    // step 1: filter through the array and create an new one "step1movies"
    const step1movies = movieData.filter((movie) => {
      if (passedRuntime === "short") {
        return movie.runtime <= 100;
      }
      if (passedRuntime === "middle") {
        return movie.runtime >= 100 && movie.runtime <= 140;
      }
      if (passedRuntime === "long") {
        return movie.runtime >= 140;
      }
    });
    setQuizStep(quizStep + 1);
    setMovieDataStep1(step1movies);

    // step 2: create a random number between 0 and the new array length
    setRandomPick(Math.floor(Math.random() * step1movies.length));

    // step 3: navigate to the new page
    router.push(`/movies/${step1movies[randomPick].id}`);
  }

  return (
    <>
      <section>
        <h1>Wie viel Zeit hast du heute?</h1>
        <button onClick={() => handleButton("short")}>Möglichst kurz</button>
        <button onClick={() => handleButton("middle")}>
          Normale Lauflänge
        </button>
        <button onClick={() => handleButton("long")}>Ich habe Zeit</button>
      </section>
    </>
  );
}

const StyledButton = styled.button`
  max-width: 250px;
  height: 100px;
`;
