import { useRouter } from "next/router";
import { useState } from "react";
import { movieData } from "../../assets/data/movieData";

export default function MovieQuiz() {
  const [quizStep, setQuizStep] = useState(0); // sets the step the user is currently at the quiz
  const [movieDataStep1, setMovieDataStep1] = useState(movieData); // sets the filtered movie data array
  const [randomPick, setRandomPick] = useState(0); // picks a random number for choosing one movie out of the filtered array
  const router = useRouter();
  console.log("RandomPick: ", randomPick, "array: ", movieDataStep1);

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

    // map through the movie Array
    step1movies.map((movie) => <li key={movie.id}></li>);
    setRandomPick(Math.floor(Math.random() * step1movies.length));
    if (!randomPick) {
      return null;
    } else await router.push(`/movies/${movieDataStep1[randomPick].id}`);
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
