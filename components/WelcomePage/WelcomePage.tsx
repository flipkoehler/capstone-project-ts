// This site welcomes the user with content that explains what the user can expect from this page.

import Link from "next/link";
import styled from "styled-components";
import Benefits from "../Benefits/Benefits";
import Lottie from "lottie-react";
import movieCouchRelaxe from "../../public/AwMMLBI1Tn.json";
import Slider from "../Slider/Slider";

export default function WelcomePage(): JSX.Element {
  return (
    <StyledContentBox>
      <StyledDivStart>
        <h1>
          Deine Filmempfehlung in <StyledSpan>vier einfachen</StyledSpan>{" "}
          Schritten
        </h1>
        <StyledPIntroText>
          Du hast das ewige Scrollen durch Netflix, Amazon und Co. satt?! Mit
          der Hilfe von vier kurzen Fragen geben wir dir eine wunderbare
          Filmempfehlung für deinen nächsten Filmabend. Alle Filme sind
          handverlesen und garantieren beste Unterhaltung!
          <StyledLink href="/quiz">Quiz jetzt starten!</StyledLink>
        </StyledPIntroText>

        <StyledDivLottie>
          <Lottie animationData={movieCouchRelaxe} loop={true} />
        </StyledDivLottie>
      </StyledDivStart>
      <h2>Und so kommst du zu deinem Film</h2>
      <Slider />

      <Benefits />
    </StyledContentBox>
  );
}

const StyledContentBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  background: var(--darkBlue);
  color: var(--globalWhite);
  border-radius: 6px;
  padding: 3px 6px;
`;

const StyledLink = styled(Link)`
  max-width: 20rem;
  max-height: 3rem;
  border: 0.2rem solid var(--darkBlue);
  color: var(--smokey-black);
  margin: 1rem 1rem 1rem 0;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDivStart = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.2rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledDivLottie = styled.div`
  flex: 42%;
  max-width: 25rem;
`;

const StyledPIntroText = styled.p`
  flex: 58%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.7rem;
  flex-direction: column;
  align-items: flex-start;
`;
