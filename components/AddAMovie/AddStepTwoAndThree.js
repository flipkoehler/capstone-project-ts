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
    <>
      <StyledMoodParentDiv>
        {category === "mood" ? (
          <h3>
            Vergebe mindestens 2 Stimmungen die du mit dem Film verbindest
          </h3>
        ) : (
          <h3>Mit wem kann man den Film gut schauen?</h3>
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

      {checkedCount > 1 ? (
        <button onClick={(event) => onHandleNext(event, step3PickedMovie)}>
          weiter
        </button>
      ) : (
        <button disabled={true}>weiter</button>
      )}
    </>
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
  margin: 0.2rem;
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
