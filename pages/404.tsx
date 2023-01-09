import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Header from "../components/Header/Header";

export default function FourOhFour() {
  return (
    <>
      <Header />
      <section>
        <h1>404 - Die gewünschte Seite konnte leider nicht gefunden werden</h1>
        <Image
          src={"/images/john-travolta.gif"}
          alt="good old John Travolta searching for Mia Wallace"
          width={380}
          height={200}
        />
        <p>...aber es wird mal wieder Zeit für Pulp Fiction, oder?!</p>
        <StyledLink href="/movies/680">Gib mir Pulp Fiction!</StyledLink>
      </section>
    </>
  );
}

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
