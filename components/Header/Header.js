// this is my header component that contains the logo and menu
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
    <>
      <StyledHeader>
        <StyledLogoDiv>
          <Link href="/">
            <Image
              src={"/images/movie-flip-logo.svg"}
              alt="Movie Flip Logo"
              width={280}
              height={50}
              priority
            />
          </Link>
        </StyledLogoDiv>
        {menuIsOpen ? (
          <StyledBurgerImage
            src={"/images/clarity_menu-line.svg"}
            alt="Menu Icon open"
            width={40}
            height={40}
            onClick={() => handleMenuIcon()}
          />
        ) : (
          <StyledBurgerImage
            src={"/images/clarity_remove-line.svg"}
            alt="Menu Icon close"
            width={45}
            height={45}
            onClick={() => handleMenuIcon()}
          />
        )}

        <Navigation menuIsOpen={menuIsOpen} />
      </StyledHeader>
    </>
  );
}

const StyledLogoDiv = styled.div`
  justify-content: flex-start;
  margin: 13px 0 0 20px;
  align-self: flex-start;
`;

const StyledHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  @media (max-width: 650px) {
    height: 100%;
    flex-direction: column;
  }
`;

const StyledBurgerImage = styled(Image)`
  position: absolute;
  top: 17px;
  right: 20px;
  display: none;

  @media (max-width: 650px) {
    display: flex;
  }
`;
