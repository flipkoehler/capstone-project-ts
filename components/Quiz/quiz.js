import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { movieData } from "../../assets/data/movieData";
import { questionAnswer } from "../../assets/data/questionData";

export default function MovieQuiz() {
  const router = useRouter();
  // const [movieDataFiltered, setMovieDataFiltered] = useState(movieData); // sets the filtered movie data array (import for the next steps)
  const [currentStep, setCurrentStep] = useState(0); // sets the current question step the user is in
  const [givenAnswers, setGivenAnswers] = useState([]); // saves the given answer in an array

  function handleButton(passedRuntime) {
    if (currentStep !== 0) {
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
        } else return movieData;
      });

      // setMovieDataFiltered(step1movies);

      // step 2: create a random number between 0 and the new array length
      const randomNumber = Math.floor(Math.random() * step1movies.length);

      // step 3: navigate to the new page
      router.push(`/movies/${step1movies[randomNumber].id}`);
    }
  }

  const handleAnswerOption = (answer) => {
    setGivenAnswers([(givenAnswers[currentStep] = { movieChoice: answer })]);
    setGivenAnswers([...givenAnswers]);
    console.log(givenAnswers);
  };

  function handleNext(event) {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
    handleButton();
  }

  return (
    <>
      <section>
        <form>
          <h1>{questionAnswer[currentStep].question}</h1>
          {questionAnswer[currentStep].answerOptions.map((answer, index) => (
            <div key={index} onClick={(e) => handleAnswerOption(answer.value)}>
              <input
                type="radio"
                value="answer.value"
                name="answer"
                onChange={(e) => handleAnswerOption(answer.value)}
              />
              {answer.answer}
            </div>
          ))}
          <div>
            <button type="submit" onClick={handleNext}>
              Weiter
            </button>
          </div>
        </form>
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

// function handleButton(passedRuntime) {
//   // step 1: filter through the array and create an new one "step1movies"
//   const step1movies = movieDataFiltered.filter((movie) => {
//     if (passedRuntime === "short") {
//       return movie.runtime <= 100;
//     }
//     if (passedRuntime === "middle") {
//       return movie.runtime >= 100 && movie.runtime <= 140;
//     }
//     if (passedRuntime === "long") {
//       return movie.runtime >= 140;
//     } else return movieData;
//   });

//   setMovieDataFiltered(step1movies);

//   // step 2: create a random number between 0 and the new array length
//   const randomNumber = Math.floor(Math.random() * step1movies.length);

//   // step 3: navigate to the new page
//   router.push(`/movies/${step1movies[randomNumber].id}`);
// }

//  <h1>Wie lange darf dein Film heute dauern?</h1>
//   <button onClick={() => handleButton("short")}>Nur kurz</button>
//   <button onClick={() => handleButton("middle")}>
//     Normale Lauflänge
//   </button>
//   <button onClick={() => handleButton("long")}>Ich habe Zeit</button>
//   <StyledLink2 href="/movie-recommendation">ist mir egal</StyledLink2>
