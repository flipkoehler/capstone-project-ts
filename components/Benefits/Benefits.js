import styled from "styled-components";
import Image from "next/image";

export default function Benefits() {
  return (
    <>
      <StyledBoxAroundDiv>
        <StyledParentDiv>
          <StyledImageContainerDiv>
            <Image
              src={"/images/clarity_happy-face-line.svg"}
              width={45}
              height={45}
              alt="happy Icon"
            />
          </StyledImageContainerDiv>
          <p>Filme passend zu deiner heutigen Stimmung</p>
        </StyledParentDiv>

        <StyledParentDiv>
          <StyledImageContainerDiv>
            <Image
              src={"/images/clarity_clock-line.svg"}
              width={45}
              height={45}
              alt="Clock Icon"
            />
          </StyledImageContainerDiv>
          <p>Kein langes Suchen mehr in ewig langen Katalogen</p>
        </StyledParentDiv>
        <StyledParentDiv>
          <StyledImageContainerDiv>
            <Image
              src={"/images/clarity_bullseye-line.svg"}
              width={45}
              height={45}
              alt="Bullseye Icon"
            />
          </StyledImageContainerDiv>
          <p>Ausschließlich handverlesene Empfehlungen</p>
        </StyledParentDiv>
      </StyledBoxAroundDiv>
    </>
  );
}

// CSS Styling

const StyledBoxAroundDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
  margin-bottom: 5rem;
`;

const StyledParentDiv = styled.div`
  align-items: center;
  max-width: 17rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const StyledImageContainerDiv = styled.div`
  background-color: var(--globalWhite);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
