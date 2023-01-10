import { useState } from "react";
import styled from "styled-components";
import { movieMood } from "../../assets/data/moods";
import Image from "next/image";

export default function QuizSteps({
  currentQuestion,
  onNext,
  isLastStep,
  currentStep,
  onPrev,
}) {
  // sets the given answers in an array (e.g. Question 1 - short movies)
  const [updateAnswer, setUpdateAnswer] = useState(currentQuestion);

  const [hasDetailViewClicked, setHasDetailViewClicked] = useState([0, false]);
  // console.log("hasDetailViewClicked", hasDetailViewClicked);

  const updateState = (id) => {
    const updatedItems = [...updateAnswer[currentStep].answerOptions];
    const itemIndex = updatedItems.findIndex((obj) => obj.id === id);
    updatedItems[itemIndex].checked = !updatedItems[itemIndex].checked;
    setUpdateAnswer({
      ...updateAnswer,
      answerOptions: updatedItems,
    });
  };

  const updateDetailState = (answer, index) => {
    const clickedAnswer = answer.value[index];
    console.log(clickedAnswer);
  };

  function foldOutMoods(answer) {
    setHasDetailViewClicked([answer.id, !hasDetailViewClicked[1]]);
  }

  return (
    <form>
      <StyledHeadlineParentDiv>
        <>
          <StyledH2>{updateAnswer[currentStep].question}</StyledH2>
          <StyledImageWrappeTopDiv>
            <Image
              src={updateAnswer[currentStep].imagePath}
              width={120}
              height={120}
              alt={updateAnswer[currentStep].question}
            />
          </StyledImageWrappeTopDiv>
        </>
      </StyledHeadlineParentDiv>

      <StyledBottomDiv>
        <StyledAnswerWrapperParentDiv>
          {updateAnswer[currentStep].answerOptions.map((answer, index) => (
            <StyledAnswerWrapper key={index}>
              <StyledInput
                type="checkbox"
                id={Object.keys(answer.value)}
                value={answer.value}
                checked={answer.checked}
                readOnly
                onClick={() => updateState(answer.id)}
              />
              <StyledAnswer>
                {currentStep === 2 ? (
                  <div>
                    {answer.answer}
                    <StyledArrowImage
                      src={"/images/clarity_caret-line.svg"}
                      width={30}
                      height={30}
                      alt={"arrow"}
                      onClick={() => foldOutMoods(answer)}
                    />
                  </div>
                ) : (
                  answer.answer
                )}
              </StyledAnswer>

              {(currentStep === 0) | 1 | 3 && (
                <StyledSpan>{answer.information}</StyledSpan>
              )}
              {currentStep === 2 && (
                <>
                  <StyledSpan>
                    {movieMood
                      .filter((mood) => answer.value.includes(mood.id))
                      .map((mood, index) => (index ? ", " : "") + mood.value)}
                  </StyledSpan>
                  {hasDetailViewClicked[0] === answer.id &&
                    hasDetailViewClicked[1] === true && (
                      <ul>
                        {movieMood
                          .filter((mood) => answer.value.includes(mood.id))
                          .map((mood, index) => (
                            <>
                              <StyledDetailMoodContainerDiv key={index}>
                                <StyledInput
                                  type="checkbox"
                                  id={answer.value}
                                  value={answer.value}
                                  checked={answer.checked}
                                  readOnly
                                  onClick={() =>
                                    updateDetailState(answer, index)
                                  }
                                />
                                <span>{mood.value}</span>
                              </StyledDetailMoodContainerDiv>
                            </>
                          ))}
                      </ul>
                    )}
                </>
              )}
            </StyledAnswerWrapper>
          ))}
        </StyledAnswerWrapperParentDiv>
        <StyledImageWrappeDownDiv>
          <Image
            src={updateAnswer[currentStep].imagePath}
            width={250}
            height={250}
            alt={updateAnswer[currentStep].question}
          />
        </StyledImageWrappeDownDiv>
      </StyledBottomDiv>

      <StyledButtonDiv>
        <button
          disabled={currentStep === 0 ? true : false}
          onClick={(event) => onPrev(event, updateAnswer[currentStep])}
        >
          zurück
        </button>
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
          {isLastStep ? "Filmempfehlung" : "Weiter"}
        </button>
      </StyledButtonDiv>
      <StyledPaginationDiv>Frage {currentStep + 1} von 4</StyledPaginationDiv>
    </form>
  );
}

// CSS Styling

// Headline

const quizBreakpoint = "765px";

const StyledH2 = styled.h2`
  flex: 60%;
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const StyledHeadlineParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 1rem;
`;

const StyledPaginationDiv = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const StyledImageWrappeTopDiv = styled.div`
  display: none;
  flex: 25%;
  align-self: center;
  justify-content: flex-start;
  @media (max-width: ${quizBreakpoint}) {
    display: flex;
  }
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

  @media (max-width: ${quizBreakpoint}) {
    max-width: 100%;
  }
`;

const StyledAnswerWrapper = styled.div`
  margin: 0.2rem;
  padding: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background-color: var(--globalWhite);
`;

const StyledImageWrappeDownDiv = styled.div`
  display: flex;
  flex: 35%;
  align-self: center;
  justify-content: center;
  @media (max-width: ${quizBreakpoint}) {
    display: none;
  }
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
  margin-right: 0.5rem;
`;

const StyledSpan = styled.span`
  font-size: 0.7rem;
  padding-left: 3rem;
`;

const StyledButtonDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledArrowImage = styled(Image)`
  background-color: hotpink;
  position: absolute;
  right: 2rem;
  z-index: 1000;
`;

const StyledDetailMoodContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
