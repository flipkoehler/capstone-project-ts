import Link from "next/link";
import { useState } from "react";
import { movieData } from "../../assets/data/movieData";
import RandomMoviePicker from "../RandomMoviePicker/RandomMoviePicker";

export default function MovieQuiz() {
  const [quizStep, setQuizStep] = useState(0);
  const [movieDataStep1, setMovieDataStep1] = useState(movieData);
  console.log(movieDataStep1);

  function handleButton(passedRuntime) {
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
