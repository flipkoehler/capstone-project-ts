// this is my header component that will contain logo and menu later on
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  function handleMenuIcon() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <StyledHeader>
      <StyledLogoDiv>
        <Link href="/">
          <Image
            src={"/images/movie-flip-logo.svg"}
            alt="Movie Flip Logo"
            width={200}
            height={200}
            priority
          />
        </Link>
      </StyledLogoDiv>
      <StyledBurgerImage
        src={"/images/clarity_menu-line.svg"}
        alt="Menu Icon"
        width={40}
        height={40}
        onClick={() => handleMenuIcon()}
      />
      <Navigation menuIsOpen={menuIsOpen} />
    </StyledHeader>
  );
}
const StyledLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4.5rem;
  padding-left: 30px;
  background-color: green;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledBurgerImage = styled(Image)`
  position: absolute;
  right: 5px;
  background-color: lightblue;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  display: none;

  @media (max-width: 550px) {
    display: flex;
  }
`;
