import { questionAnswer } from "../../assets/data/questionData";
import QuizSteps from "../../components/Quiz/QuizSteps";
import { useState } from "react";

export default function AddStepTwo({ onHandleNext }) {
  const currentQuestion = questionAnswer[2];
  const [updateAnswer, setUpdateAnswer] = useState(currentQuestion);
  console.log(updateAnswer);

  // const updateState = (event, id) => {
  //   event.preventDefault();
  //   const updatedItems = [...updateAnswer[currentStep].answerOptions];
  //   const itemIndex = updatedItems.findIndex((obj) => obj.id === id);
  //   updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;
  //   setUpdateAnswer({
  //     ...updateAnswer,
  //     answerOptions: updatedItems,
  //   });
  // };

  function testi(event) {
    event.preventDefault();
    onHandleNext(event);
  }

  return (
    <>
      <QuizSteps
        currentStep={2}
        currentQuestion={questionAnswer}
        onNext={(event) => testi(event)}
      />
    </>
  );
}
