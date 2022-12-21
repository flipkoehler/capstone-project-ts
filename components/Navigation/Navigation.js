import Link from "next/link";
import styled from "styled-components";

export default function Navigation({ menuIsOpen }) {
  console.log(menuIsOpen);
  //   const status = menuIsOpen === true ? "huhu" : "testi";

  return (
    <StyledNav menuIsOpen={menuIsOpen}>
      <StyledUl>
        <li>
          <StyledLink href={"#"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink href={"#"}>Über uns</StyledLink>
        </li>
        <li>
          <StyledLink href={"#"}>Eintrag 3</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledNav = styled.nav`
  background-color: lightgray;
  display: flex;
  @media (max-width: 550px) {
    display: ${(props) => (props.menuIsOpen ? "none" : "flex")};
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--smokeyBlack);
  padding: 1rem;
  display: block;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
