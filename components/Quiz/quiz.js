import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { movieData } from "../../assets/data/movieData";
import { questionAnswer } from "../../assets/data/questionData";

export default function MovieQuiz() {
  // uesd for routing
  const router = useRouter();
  // sets the current question step the user is in (e.g. Step 1 out of 4)
  const [currentStep, setCurrentStep] = useState(0);
  // saves the given answer in an array (e.g. Question 1 - short movies)
  const [givenAnswers, setGivenAnswers] = useState([]);

  function handleMovieData(givenAnswers) {
    console.log(givenAnswers[0].movieChoice);
    if (currentStep >= 1) {
      // step 1: filter through the array and create an new one "step1movies"
      const step1movies = movieData
        .filter((movie) => {
          if (givenAnswers[0].movieChoice === "shortMovies") {
            return movie.runtime <= 100;
          }
          if (givenAnswers[0].movieChoice === "middleMovies") {
            return movie.runtime >= 100 && movie.runtime <= 140;
          }
          if (givenAnswers[0].movieChoice === "longMovies") {
            return movie.runtime >= 140;
          } else return movieData;
          // step 2: filter to search for the right production
        })
        .filter((movie) => {
          if (givenAnswers[1].movieChoice === "publishedOld") {
            return movie.release_date <= 1987;
          }
          if (givenAnswers[1].movieChoice === "publishedModernClassics") {
            return movie.release_date >= 1987 && movie.runtime <= 2010;
          }
          if (givenAnswers[1].movieChoice === "publishedNew") {
            return movie.release_date >= 2010;
          } else return givenAnswers;
        });

      // step 3: create a random number between 0 and the new array length - to pick a random movie
      const randomNumber = Math.floor(Math.random() * step1movies.length);

      // step 4: navigate to the random movie detail page
      router.push(`/movies/${step1movies[randomNumber].id}`);
    }
  }

  // Function takes the input value and add it to the array with the current answers
  function handleAnswerOption(answer) {
    setGivenAnswers([(givenAnswers[currentStep] = { movieChoice: answer })]);
    setGivenAnswers([...givenAnswers]);
  }

  // Function handels the Click on the Button. It sets the current step the user is in
  // and it gives the current array with the given answers to the main function that calculates the movie
  function handleNext(event) {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
    handleMovieData(givenAnswers);
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
                checked={
                  answer.value === givenAnswers[currentStep]?.movieChoice
                }
              />
              {answer.answer}
            </div>
          ))}
          <div>
            <button
              type="submit"
              onClick={handleNext}
              disabled={currentStep === givenAnswers.length}
            >
              {currentStep === 0 ? "Weiter" : "Zur Filmempfehlung"}
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
