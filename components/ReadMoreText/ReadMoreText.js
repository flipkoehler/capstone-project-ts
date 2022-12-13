// This component is for fold and unfold the text. If a user klicks on the textlink it shows more  or less text depending on the useState

import { useState } from "react";
import styled from "styled-components";

// this sets set state true or false // the children is the passed text
export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // this returns the whole text or the reduced text sliced down to x characters
  return (
    <p>
      {isReadMore ? `${text.slice(0, 200)}...` : text}
      <SpanStyled onClick={toggleReadMore}>
        <br></br>
        {isReadMore ? "... mehr lesen" : "Text wieder einklappen"}
      </SpanStyled>
    </p>
  );
}

// CSS Styling for the link
const SpanStyled = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
