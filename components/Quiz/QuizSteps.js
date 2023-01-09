import { useState } from "react";
import styled from "styled-components";
import { movieMood } from "../../assets/data/moods";
import Image from "next/image";

export default function QuizSteps({
  currentQuestion,
  onNext,
  isLastStep,
  currentStep,
}) {
  // sets the given answers in an array (e.g. Question 1 - short movies)
  const [updateAnswer, setUpdateAnswer] = useState(currentQuestion);

  const updateState = (id) => {
    const updatedItems = [...updateAnswer[currentStep].answerOptions];
    const itemIndex = updatedItems.findIndex((obj) => obj.id === id);
    updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;
    setUpdateAnswer({
      ...updateAnswer,
      answerOptions: updatedItems,
    });
  };

  const quizBreakpoint = 720;

  return (
    <form>
      <StyledHeadlineParentDiv>
        <StyledPaginationDiv>Frage {currentStep + 1} von 4</StyledPaginationDiv>
        <h1>{updateAnswer[currentStep].question}</h1>
      </StyledHeadlineParentDiv>

      <StyledBottomDiv>
        <StyledAnswerWrapperParentDiv>
          {updateAnswer[currentStep].answerOptions.map((answer, index) => (
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
              {(currentStep === 0) | 1 | 3 && (
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
        </StyledAnswerWrapperParentDiv>
        <StyledImageWrappeDiv>
          <Image
            src={updateAnswer[currentStep].imagePath}
            width={250}
            height={250}
            alt={updateAnswer[currentStep].question}
          />
        </StyledImageWrappeDiv>
      </StyledBottomDiv>

      <div>
        <button
          disabled={
            updateAnswer[currentStep].answerOptions.filter(
              (answer) => answer.checked === true
            ).length === 0
              ? true
              : false
          }
          onClick={(event) => onNext(event, updateAnswer[currentStep])}
        >
          {isLastStep ? "Zur Filmempfehlung" : "Weiter"}
        </button>
      </div>
    </form>
  );
}

// CSS Styling

// Headline

const StyledHeadlineParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;
`;

const StyledPaginationDiv = styled.div`
  width: 100%;
`;

// Bottom Quiz
const StyledBottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 1rem;
`;

const StyledAnswerWrapperParentDiv = styled.div`
  max-width: 65%;
  flex: 65%;
`;

const StyledAnswerWrapper = styled.div`
  margin: 0.2rem;
  padding: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
  background-color: var(--globalWhite);
`;

const StyledImageWrappeDiv = styled.div`
  display: flex;
  flex: 35%;
  align-self: center;
  justify-content: center;
`;

const StyledAnswer = styled.p`
  display: flex;
  width: 80%;
  height: 20px;
  margin: 0 0 0 1rem;
`;

const StyledInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 0.7rem;
  padding-left: 3rem;
`;
