import styled from "styled-components";
import Image from "next/image";

export default function Benefits() {
  return (
    <>
      <p>Movie Flip bietet dir folgende Vorteile:</p>
      <StyledUl>
        <StyledLi>
          <StyledImage
            src={"/images/clarity_happy-face-line.svg"}
            width={30}
            height={30}
            alt="happy Icon"
          />
          Filme passend zur täglichen Stimmung
        </StyledLi>
        <StyledLi>
          <StyledImage
            src={"/images/clarity_clock-line.svg"}
            width={30}
            height={30}
            alt="Clock Icon"
          />
          passgenau mit deinem Zeitfenster
        </StyledLi>
        <StyledLi>
          <StyledImage
            src={"/images/clarity_bullseye-line.svg"}
            width={30}
            height={30}
            alt="Bullseye Icon"
          />
          handverlesene Empfehlungen
        </StyledLi>
      </StyledUl>
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
