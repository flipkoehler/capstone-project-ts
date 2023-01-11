import { useState } from "react";
import { movieMood } from "../../assets/data/moods";
import styled from "styled-components";

export default function AddStepTwo({ onHandleNext, pickedMovie }) {
  const [Step2PickedMovie, setStep2PickedMovie] = useState(pickedMovie);
  const [movieMoodData, setMovieDataMoods] = useState(movieMood);

  function handleCheck(clickedMood) {
    const newMovieMoodData = movieMoodData.map((mood) =>
      clickedMood.id === mood.id ? { ...mood, checked: !mood.checked } : mood
    );
    setMovieDataMoods(newMovieMoodData);

    const mood = newMovieMoodData
      .filter((mood) => mood.checked === true)
      .map((mood) => mood.id);

    setStep2PickedMovie({ ...pickedMovie, mood });
  }

  return (
    <>
      <StyledMoodParentDiv>
        <h3>Vergebe mindestens 2 Stimmungen die du mit dem Film verbindest</h3>
        {movieMoodData.map((mood) => {
          return (
            <StyledMoodDiv key={mood.id} onClick={() => handleCheck(mood)}>
              <StyledInput
                type="checkbox"
                id="mood.id"
                value={mood.value}
                checked={mood.checked}
                readOnly
              />
              <StyledSpan>{mood.value}</StyledSpan>
            </StyledMoodDiv>
          );
        })}
      </StyledMoodParentDiv>

      {Step2PickedMovie.mood.length > 1 ? (
        <button onClick={(event) => onHandleNext(event, Step2PickedMovie)}>
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
  width: 1rem;
  height: 1rem;
  margin-right: 0.4rem;
`;

const StyledSpan = styled.span``;
