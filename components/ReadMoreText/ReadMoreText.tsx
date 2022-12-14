// This component is for fold and unfold the text. If a user klicks on the textlink it shows more  or less text depending on the useState

import { useState } from "react";
import styled from "styled-components";

type PassedProps = {
  children: string;
};

// this sets set state true or false // the children is the passed text
export default function ReadMore({ children }: PassedProps): JSX.Element {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // this returns the whole text or the reduced text sliced down to x characters
  return (
    <>
      <p aria-label="movie description" data-testid="movie-description">
        {isReadMore ? `${text.slice(0, 200)}...` : text}
      </p>
      <SpanStyled onClick={toggleReadMore} data-testid="read-more-link">
        {isReadMore ? "...mehr lesen" : "Text wieder einklappen"}
      </SpanStyled>
    </>
  );
}

// CSS Styling for the link
const SpanStyled = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
