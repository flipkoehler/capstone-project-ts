import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
  align: "start",
};

export default function Slider() {
  //   const options = props;
  //   const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <StyledSliderContainerDiv ref={emblaRef}>
        <StyledSliderContainerParentDiv>
          <StyledSliderItemDiv>
            <StyledHeadlineDiv>
              <StyledNumberDiv>1</StyledNumberDiv>
              <h3>Das Quiz</h3>
            </StyledHeadlineDiv>
            <p>
              Beantworte vier kurze Fragen. Auf dieser Grundlage wird dir dann
              ein Film empfohlen.
            </p>
            <StyledLink href="/quiz">Quiz jetzt starten!</StyledLink>
          </StyledSliderItemDiv>
          <StyledSliderItemDiv>
            <StyledHeadlineDiv>
              <StyledNumberDiv>2</StyledNumberDiv>
              <h3>Zufälliger Film</h3>
            </StyledHeadlineDiv>
            <p>
              Du hast keine Lust auf die Fragen und willst sofort starten?
              Klicke hier für eine zufällige Empfehlung.
            </p>
            <StyledLink href="/movie-recommendation">
              Direkt zum Film
            </StyledLink>
          </StyledSliderItemDiv>
          <StyledSliderItemDiv>
            <StyledHeadlineDiv>
              <StyledNumberDiv>3</StyledNumberDiv>
              <h3>Ein Film mit</h3>
            </StyledHeadlineDiv>
            <p>
              Manchmal hat man einfach Lust auf einen Film mit Kevin Costner.
              Oder vielleicht Tom Hanks?!
            </p>
            <h3>folgt bald!</h3>
          </StyledSliderItemDiv>
        </StyledSliderContainerParentDiv>
      </StyledSliderContainerDiv>
      <StyledControlsDiv>
        <StyledButton onClick={scrollPrev}>
          <StyledImage
            src={"/images/clarity_arrow-line_left.svg"}
            width={30}
            height={30}
            alt="go back"
          />
        </StyledButton>
        <StyledButton onClick={scrollNext}>
          <StyledImage
            src={"/images/clarity_arrow-line_right.svg"}
            width={30}
            height={30}
            alt="go forward"
          />
        </StyledButton>
      </StyledControlsDiv>
    </>
  );
}

const StyledSliderContainerDiv = styled.div`
  overflow: hidden;
`;

const StyledSliderContainerParentDiv = styled.div`
  display: flex;
`;

const StyledSliderItemDiv = styled.div`
  flex: 0 0 44%;
  flex-wrap: wrap;
  min-width: 0;
  max-width: 100%;
  background-color: var(--globalWhite);
  border-radius: 1rem 1rem 0px 1rem;
  box-shadow: 0px -0.5rem 0.8rem rgba(0, 0, 0, 0.07);
  margin: 1.5rem 1.2rem 0 0.2rem;
  padding: 2rem;
  @media screen and (max-width: 600px) {
    flex: 0 0 92%;
    margin: 0 1rem 0 1rem;
  }
`;

const StyledButton = styled.button`
  max-width: 5rem;
  max-height: 3rem;
  background-color: transparent;
  color: var(--smokey-black);
  border: var(--globalWhite) 3px solid;
  margin: 10px auto;
  border-radius: none;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  & .not:hover {
    background-color: var(--globalWhite);
    color: var(--globalWhite);
    transition: ease-in-out 0.3s;
  }
`;

const StyledControlsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 15rem;
`;

const StyledHeadlineDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledNumberDiv = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid var(--darkBlue);
  font-size: 1.3rem;
  margin-right: 1rem;
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

const StyledImage = styled(Image)``;
