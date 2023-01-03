import { useRouter } from "next/router";
import { useState } from "react";
import useFetch from "../../lib/fetch";
import randomMoviePicker from "../../lib/randomMoviePicker";
import QuizSteps from "./QuizSteps";
import { questionAnswer } from "../../assets/data/questionData";

export default function MovieQuiz() {
  const movieData = useFetch("/api");
  const router = useRouter();

  //shorten the release date
  const movieDataWithEditedReleaseYear = movieData.map((movie) => {
    return { ...movie, release_date: movie.release_date.slice(0, 4) };
  });

  // sets the current question step the user is in (e.g. Step 1 out of 4)
  const [currentStep, setCurrentStep] = useState(0);

  // updates the questions with true/false for the answer options
  const [updatedQuestionAnswer, setUpdatedQuestionAnswer] =
    useState(questionAnswer);

  // this function is the main component. As a parameter it takes an Array with the given answers
  // it is called when the User hits the "Zur Filmempfehlung" Button
  function handleMovieData(updatedQuestionAnswer) {
    // this calculates the min/max values for the runtime
    const minRuntime = updatedQuestionAnswer[0].answerOptions.find(
      (answer) => answer.checked && answer
    ).value.min;

    const maxRuntime = updatedQuestionAnswer[0].answerOptions.findLast(
      (answer) => answer.checked && answer
    ).value.max;

    // this calculates the min/max values for the release date
    const minReleaseDate = updatedQuestionAnswer[1].answerOptions.find(
      (answer) => answer.checked && answer
    ).value.min;

    const maxReleaseDate = updatedQuestionAnswer[1].answerOptions.findLast(
      (answer) => answer.checked && answer
    ).value.max;

    const checkedMoods = updatedQuestionAnswer[2].answerOptions
      .filter((answer) => answer.checked && answer)
      .map((a) => a.value)
      .reduce((a, b) => [...a, ...b], []);

    console.log("checkedMoods", checkedMoods);

    //step 1: filter through the array and create an new one "filteredMovies" only including movies with the correct duration and release date
    const filteredMovies = movieDataWithEditedReleaseYear
      .filter((movie) => {
        return (
          movie.runtime >= minRuntime &&
          movie.runtime <= maxRuntime &&
          movie.release_date >= minReleaseDate &&
          movie.release_date <= maxReleaseDate
        );
      })
      .filter((movie) => movie.mood && movie);

    console.log("filteredmovies", filteredMovies);

    function handleIncludedMoods(checkedMoods, filteredMovies) {
      for (const mood of checkedMoods) {
        const filteredMoviesWithMood = filteredMovies.map((movie) => {
          if (movie.mood.includes(mood)) {
            return movie;
          } else {
            return "no-movie";
          }
        });
        return filteredMoviesWithMood;
      }
    }

    const filteredMoviesWithMood = handleIncludedMoods(
      checkedMoods,
      filteredMovies
    ).filter((movie) => movie !== "no-movie");

    console.log("filteredMoviesWithMood", filteredMoviesWithMood);

    // Step 2: shuffles a random movie based on the array
    const randomMovie = randomMoviePicker(filteredMoviesWithMood);

    // step 3: navigate to the random movie detail page
    if (filteredMoviesWithMood.length > 0) {
      router.push(`/movies/${randomMovie.id}`);
    } else router.push(`/errorpages/no-movie`);
  }

  // Function handles the Click on the Button. It sets the current step the user is in
  // and it gives the current array with the given answers to the main function
  function handleNext(event, givenAnswers) {
    event.preventDefault();
    const updatedItems = [...updatedQuestionAnswer];
    updatedItems[currentStep] = givenAnswers;
    setUpdatedQuestionAnswer([...updatedItems]);

    if (currentStep === questionAnswer.length - 1) {
      handleMovieData(updatedQuestionAnswer);
    } else setCurrentStep(currentStep + 1);
  }

  // this is the html shown. It takes the content from the questionData Array and maps through it
  return (
    <QuizSteps
      currentQuestion={updatedQuestionAnswer}
      handleNext={handleNext}
      isLastStep={currentStep === questionAnswer.length - 1}
      currentStep={currentStep}
    />
  );
}
