// This site welcomes the user with content that explains what the user can expect from this page.

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Benefits from "../Benefits/Benefits";

export default function WelcomePage() {
  return (
    <>
      <section>
        <h1>Willkommen zu Movie Flip 🎬</h1>
        <p>
          Du hast das ewige Scrollen durch Netflix, Amazon und Co. satt?! Dann
          bist du hier genau richtig! Mit der Hilfe von vier kurzen Fragen geben
          wir dir eine wunderbare Filmempfehlung für deinen nächsten Filmabend.
          Alle Filme sind handverlesen und garantieren beste Unterhaltung!
        </p>
        <Benefits />
        <StyledLink href="/quiz">Quiz jetzt starten!</StyledLink>
        <StyledLink2 href="/movie-recommendation">
          Oder eine zufällige Filmempfehlung!
        </StyledLink2>
      </section>
    </>
  );
}

// CSS Styling

const StyledUl = styled.ul`
  padding: 0;
  margin: -5px 0 20px 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLi = styled.li`
  align-items: center;
  padding: 0;
  margin: 0 0 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  max-width: 300px;
  max-height: 50px;
  background-color: var(--darkBlue);
  color: var(--globalWhite);
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink2 = styled(Link)`
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--smokey-black);
`;
