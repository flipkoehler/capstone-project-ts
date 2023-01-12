import { useState } from "react";
import styled from "styled-components";

export default function AddStepFour({ onHandleNext, pickedMovie }) {
  const [step4PickedMovie, setStep4PickedMovie] = useState(pickedMovie);

  // this easy peasy function locates the values of the form and adds them to the
  // pickedMovieArray

  function handleLeave(event) {
    let currentField = event.target.name;
    const currentValue = event.target.value;

    currentField == "comment" &&
      setStep4PickedMovie({ ...step4PickedMovie, comment: currentValue });

    currentField == "trailer" &&
      setStep4PickedMovie({ ...step4PickedMovie, trailer: currentValue });
  }

  return (
    <>
      <h2>Füge weitere Infos hinzu</h2>
      <StyledForm onSubmit={(event) => onHandleNext(event, step4PickedMovie)}>
        <StyledLabel htmlFor="comment">
          Warum empfiehlst du diesen Film?
        </StyledLabel>
        <StyledTextArea
          type="text"
          name="comment"
          placeholder='z.B.: "es ist der schönste Film der Welt"'
          required
          rows="8"
          onChange={(event) => handleLeave(event)}
        />
        <StyledLabel htmlFor="trailer">Füge einen Trailer hinzu</StyledLabel>
        <StyledInput
          type="text"
          name="trailer"
          placeholder='z.B.: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"'
          required
          onChange={(event) => handleLeave(event)}
        />
        <StyledButton>hinzufügen</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  max-width: 25rem;
  padding: 0.7rem;
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  height: 3rem;
  max-width: 25rem;
  padding: 0.7rem;
  border-radius: 1rem;
`;

const StyledLabel = styled.label`
  margin: 1rem 0 0.5rem 0;
`;

const StyledButton = styled.button`
  margin-top: 1.5rem;
`;
