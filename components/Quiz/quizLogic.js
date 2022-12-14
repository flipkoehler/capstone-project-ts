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
    // Quiz Step 1: this calculates the min/max values for the runtime
    const minRuntime = updatedQuestionAnswer[0].answerOptions.find(
      (answer) => answer.checked && answer
    ).value.min;

    const maxRuntime = updatedQuestionAnswer[0].answerOptions.findLast(
      (answer) => answer.checked && answer
    ).value.max;

    // Quiz Step 2: this calculates the min/max values for the release date
    const minReleaseDate = updatedQuestionAnswer[1].answerOptions.find(
      (answer) => answer.checked && answer
    ).value.min;

    const maxReleaseDate = updatedQuestionAnswer[1].answerOptions.findLast(
      (answer) => answer.checked && answer
    ).value.max;

    // Quiz Step 1 + 2: filter through the array and create an new array called "filteredMoviesStep1andStep2" only including movies with the correct duration and release date
    const filteredMoviesStep1andStep2 = movieDataWithEditedReleaseYear
      .filter((movie) => {
        return (
          movie.runtime >= minRuntime &&
          movie.runtime <= maxRuntime &&
          movie.release_date >= minReleaseDate &&
          movie.release_date <= maxReleaseDate
        );
      })
      .filter((movie) => movie.mood && movie);

    // Quiz Step 3: this collects the given answers for the checked moods and put them in an array e.g. [1,2,3,4,5...]
    const checkedMoods = updatedQuestionAnswer[2].answerOptions
      .filter((answer) => answer.checked && answer)
      .map((a) => a.value)
      .reduce((a, b) => [...a, ...b], []);

    // Quiz Step 3: this filters through the array of Step1 and 2 and reduces it by the checked moods
    const filteredMoviesStep3 = filteredMoviesStep1andStep2
      .filter((item) => {
        return item.mood.some((mood) => checkedMoods.includes(mood));
      })
      .filter((movie) => movie.occasion && movie);

    // Quiz Step 4: this filters through the array of Step 3 and reduces it by selected occasion
    const checkedOccasion = updatedQuestionAnswer[3].answerOptions
      .filter((answer) => answer.checked && answer)
      .map((a) => a.value);

    const filteredMoviesStep4 = filteredMoviesStep3.filter((movie) => {
      return movie.occasion.some((occasion) =>
        checkedOccasion.includes(occasion)
      );
    });

    // navigation: shuffles a random movie based on the array
    const randomMovie = randomMoviePicker(filteredMoviesStep4);

    // navigation: navigate to the random movie detail page

    if (filteredMoviesStep4.length > 0) {
      router.push(`/movies/${randomMovie.id}`);
    } else router.push(`/errorpages/no-movie`);
  }

  // Function handles the Click on the Button. It sets the current step the user is in
  // and it gives the current array with the given answers to the main function

  function handleNext(event, updateAnswer) {
    event.preventDefault();
    const updatedItems = [...updatedQuestionAnswer];
    updatedItems[currentStep] = updateAnswer;
    setUpdatedQuestionAnswer([...updatedItems]);

    if (currentStep === questionAnswer.length - 1) {
      handleMovieData(updatedQuestionAnswer);
    } else setCurrentStep(currentStep + 1);
  }

  function handlePrev(event, updateAnswer) {
    event.preventDefault();
    const updatedItems = [...updatedQuestionAnswer];
    updatedItems[currentStep] = updateAnswer;
    setUpdatedQuestionAnswer([...updatedItems]);
    setCurrentStep(currentStep - 1);
  }

  return (
    <QuizSteps
      currentQuestion={updatedQuestionAnswer}
      onNext={handleNext}
      isLastStep={currentStep === questionAnswer.length - 1}
      currentStep={currentStep}
      onPrev={handlePrev}
    />
  );
}
