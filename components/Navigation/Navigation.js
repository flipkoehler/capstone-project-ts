import Link from "next/link";
import styled from "styled-components";

export default function Navigation({ menuIsOpen }) {
  return (
    <StyledNav menuIsOpen={menuIsOpen}>
      <StyledUl>
        <li>
          <StyledLink href={"/"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink href={"/quiz"}>Quiz</StyledLink>
        </li>
        <li>
          <StyledLink href={"/about"}>Über Movie Flip</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 650px) {
    display: ${(props) => (props.menuIsOpen ? "none" : "flex")};
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  @media (max-width: 650px) {
    margin: 20px 10px;
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--smokeyBlack);
  display: block;
  padding: 0 20px 0 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 650px) {
    padding: 15px;
    background-color: var(--globalWhite);
  }
`;
