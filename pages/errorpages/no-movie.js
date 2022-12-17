import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/Header/Header";

export default function noMovie() {
  return (
    <>
      <Header />
      <StyledH2>
        Wir haben leider keinen passenden Film für dich gefunden!
      </StyledH2>
      <StyledLink2 href="/movie-recommendation">
        Klicke hier für eine zufällige Filmempfehlung
      </StyledLink2>
    </>
  );
}

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

const StyledH2 = styled.h2`
  text-align: center;
`;
