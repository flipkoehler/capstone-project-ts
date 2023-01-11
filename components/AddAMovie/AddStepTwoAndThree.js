import { useState } from "react";
import { movieMood } from "../../assets/data/moods";
import styled from "styled-components";
import { questionAnswer } from "../../assets/data/questionData";

export default function AddStepTwoAndThree({
  onHandleNext,
  pickedMovie,
  category,
}) {
  const [step2PickedMovie, setStep2PickedMovie] = useState(pickedMovie);
  const [step3PickedMovie, setStep3PickedMovie] = useState(step2PickedMovie);
  const [movieMoodData, setMovieDataMoods] = useState(movieMood);
  const [movieOccasionData, setMovieDataOccasion] = useState(
    questionAnswer[3].answerOptions
  );
  const [checkedCount, setCheckedCount] = useState(0);

  // this function is called when the user clicks on a checkbox.
  // depending on the passed category it renders the mood or an occasion
  function handleCheck(clickedMood, passedArray, category) {
    const newMovieData = passedArray.map((item) =>
      clickedMood.id === item.id ? { ...item, checked: !item.checked } : item
    );
    category === "mood" && setMovieDataMoods(newMovieData);
    category === "occasion" && setMovieDataOccasion(newMovieData);

    const newItem = newMovieData
      .filter((item) => item.checked === true)
      .map((item) => item.id);

    setCheckedCount(newItem.length);

    category === "mood" &&
      setStep2PickedMovie({ ...pickedMovie, mood: newItem });
    category === "occasion" &&
      setStep3PickedMovie({ ...step2PickedMovie, occasion: newItem });
  }

  return (
    <form onSubmit={(event) => onHandleNext(event, step3PickedMovie)}>
      <StyledMoodParentDiv>
        {category === "mood" ? (
          <StyledH3>Welche Stimmungen verbindest du mit dem Film?</StyledH3>
        ) : (
          <StyledH3>Mit wem kann man den Film schauen?</StyledH3>
        )}
        {category === "mood" &&
          movieMoodData.map((mood) => {
            return (
              <StyledMoodDiv
                key={mood.id}
                onClick={() => handleCheck(mood, movieMoodData, category)}
              >
                <StyledInput
                  type="checkbox"
                  id="mood.id"
                  value={mood.value}
                  checked={mood.checked}
                  readOnly
                />
                <span>{mood.value}</span>
              </StyledMoodDiv>
            );
          })}
        {category === "occasion" &&
          movieOccasionData.map((occasion) => {
            return (
              <StyledMoodDiv
                key={occasion.id}
                onClick={() =>
                  handleCheck(occasion, movieOccasionData, category)
                }
              >
                <StyledInput
                  type="checkbox"
                  id="occasion.id"
                  value={occasion.value}
                  checked={occasion.checked}
                  readOnly
                />
                <span>{occasion.answer}</span>
              </StyledMoodDiv>
            );
          })}
      </StyledMoodParentDiv>

      {checkedCount >= 1 ? (
        <button>weiter</button>
      ) : (
        <button disabled={true}>weiter</button>
      )}
    </form>
  );
}

const StyledMoodParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledMoodDiv = styled.div`
  max-width: 15rem;
  padding: 0.8rem;
  margin: 0.5rem;
  background-color: var(--globalWhite);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
`;

const StyledH3 = styled.h3`
  width: 100%;
`;
