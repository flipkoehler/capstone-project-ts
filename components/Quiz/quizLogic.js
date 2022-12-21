import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { questionAnswer } from "../../assets/data/questionData";
import useFetch from "../../lib/fetch";
import randomMoviePicker from "../../lib/randomMoviePicker";

export default function MovieQuiz() {
  const movieData = useFetch("/api");
  const router = useRouter();
  // sets the current question step the user is in (e.g. Step 1 out of 4)
  const [currentStep, setCurrentStep] = useState(0);
  // saves the given answer in an array (e.g. Question 1 - short movies)
  const [givenAnswers, setGivenAnswers] = useState([]);

  // this function is the main component. As a parameter it takes an Array with the given answers
  // it is called when the User hits the "Zur Filmempfehlung" Button
  function handleMovieData(givenAnswers) {
    //step 1: filter through the array and create an new one "filteredMovies" only including movies with the correct duration
    const filteredMovies = movieData.filter((movie) => {
      return (
        movie.runtime >= givenAnswers[0].min &&
        movie.runtime <= givenAnswers[0].max &&
        movie.release_date >= givenAnswers[1].min &&
        movie.release_date <= givenAnswers[1].max
      );
    });

    // Step 2: shuffles a random movie based on the array
    const randomMovie = randomMoviePicker(filteredMovies);

    // step 3: navigate to the random movie detail page
    if (filteredMovies.length > 0) {
      router.push(`/movies/${randomMovie.id}`);
    } else router.push(`/errorpages/no-movie`);
  }

  // Function handles the Click on the Button. It sets the current step the user is in
  // and it gives the current array with the given answers to the main function
  function handleNext(event) {
    event.preventDefault();
    if (currentStep === questionAnswer.length - 1) {
      handleMovieData(givenAnswers);
    } else setCurrentStep(currentStep + 1);
  }

  // this is the html shown. It takes the content from the questionData Array and maps through it
  return (
    <form onSubmit={handleNext}>
      <section>
        <h1>{questionAnswer[currentStep].question}</h1>
        {questionAnswer[currentStep].answerOptions.map((answer, index) => (
          <StyledAnswerWrapper
            key={index}
            onClick={() => {
              setGivenAnswers([(givenAnswers[currentStep] = answer.value)]);
              setGivenAnswers([...givenAnswers]);
            }}
          >
            <StyledInput
              type="radio"
              value="answer.value"
              name="answer"
              readOnly
              checked={answer.value === givenAnswers[currentStep]}
            />
            {answer.answer}
          </StyledAnswerWrapper>
        ))}
        <div>
          <button type="submit" disabled={currentStep === givenAnswers.length}>
            {currentStep < questionAnswer.length - 1
              ? "Weiter"
              : "Zur Filmempfehlung"}
          </button>
        </div>
      </section>
    </form>
  );
}

// CSS Styling
const StyledAnswerWrapper = styled.div`
  width: 320px;
  font-size: 1.2rem;
  margin: 0.4rem auto;
  padding: 1.1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: var(--lightGray);
  border-radius: 15px;
`;

// okay - I may be stupid. But I really hate the native radio buttons. So here is my styling...
const StyledInput = styled.input`
  //remove the native radio input styles
  -webkit-appearance: none;
  appearance: none;
  margin: 0 6px 0 0;
  // styling the input field
  color: var(--darkBlue);
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--darkBlue);
  border-radius: 50%;
  place-content: center;
  // styling the input state "checked"
  &:checked {
    border-radius: 50%;
    border: 3px solid var(--globalWhite);
    transition: 250ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--darkBlue);
    transform: scale(1.2);
    background-color: var(--darkBlue);
  }
`;
