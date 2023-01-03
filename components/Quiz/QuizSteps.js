import { useState } from "react";
import styled from "styled-components";

export default function QuizSteps({
  currentQuestion,
  handleNext,
  isLastStep,
  currentStep,
}) {
  // saves the given answer in an array (e.g. Question 1 - short movies)
  const [givenAnswers, setGivenAnswers] = useState(currentQuestion);

  const updateState = (id) => {
    const updatedItems = [...givenAnswers[currentStep].answerOptions];
    const itemIndex = updatedItems.findIndex((obj) => obj.id === id);
    updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;
    setGivenAnswers({
      ...givenAnswers,
      answerOptions: updatedItems,
    });
  };

  return (
    <form>
      <section>
        <h1>{givenAnswers[currentStep].question}</h1>
        {givenAnswers[currentStep].answerOptions.map((answer, index) => (
          <StyledAnswerWrapper key={index}>
            <StyledInput
              type="checkbox"
              id="check"
              value={answer.value}
              checked={answer.checked}
              onChange={() => updateState(answer.id)}
              readOnly
            />
            {answer.answer}
          </StyledAnswerWrapper>
        ))}
        <div>
          <button
            onClick={(event) => handleNext(event, givenAnswers[currentStep])}
          >
            {isLastStep ? "Zur Filmempfehlung" : "Weiter"}
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
const StyledInput = styled.input``;
