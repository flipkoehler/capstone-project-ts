import { useState } from "react";
import styled from "styled-components";
import { movieMood } from "../../assets/data/moods";

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
          <StyledAnswerWrapper
            key={index}
            onClick={() => updateState(answer.id)}
          >
            <StyledInput
              type="checkbox"
              id="check"
              value={answer.value}
              checked={answer.checked}
              readOnly
            />
            <StyledAnswer>{answer.answer}</StyledAnswer>
            {(currentStep === 0) | 1 && (
              <StyledSpan>{answer.information}</StyledSpan>
            )}
            {currentStep === 2 && (
              <StyledSpan>
                {movieMood
                  .filter((mood) => answer.value.includes(mood.id))
                  .map((mood, index) => (index ? ", " : "") + mood.value)}
              </StyledSpan>
            )}
          </StyledAnswerWrapper>
        ))}
        <div>
          <button
            disabled={
              givenAnswers[currentStep].answerOptions.filter(
                (answer) => answer.checked === true
              ).length === 0
                ? true
                : false
            }
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
  width: 100%;
  margin: 0.2rem auto;
  padding: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: var(--lightGray);
  cursor: pointer;
`;

const StyledAnswer = styled.p`
  display: flex;
  width: 80%;
  margin-left: 1rem;
`;

// okay - I may be stupid. But I really hate the native radio buttons. So here is my styling...
const StyledInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledSpan = styled.span`
  font-size: 0.7rem;
  padding-left: 3rem;
`;
