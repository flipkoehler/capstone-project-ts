import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback } from "react";
import styled from "styled-components";

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
            1 Beantworte das Quiz in 4 einfachen FragenBeantworte das Quiz in 4
            einfachen Fragen
          </StyledSliderItemDiv>
          <StyledSliderItemDiv>
            2 Beantworte das Quiz in 4 einfachen FragenBeantworte das Quiz in 4
            einfachen Fragen
          </StyledSliderItemDiv>
          <StyledSliderItemDiv>
            3 Beantworte das Quiz in 4 einfachen FragenBeantworte das Quiz in 4
            einfachen Fragen
          </StyledSliderItemDiv>
        </StyledSliderContainerParentDiv>
      </StyledSliderContainerDiv>
      <StyledControlsDiv>
        <StyledButton onClick={scrollPrev}>Prev</StyledButton>
        <StyledButton onClick={scrollNext}>Next</StyledButton>
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
  min-width: 0;
  max-width: 100%;
  background-color: lightblue;
  height: 200px;
  margin-right: 1.2rem;

  @media screen and (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

const StyledSliderCardDiv = styled.div`
  background-color: lightblue;
`;

const StyledButton = styled.button`
  max-width: 5rem;
  max-height: 3rem;
  background-color: transparent;
  color: var(--smokey-black);
  border: var(--globalWhite) 3px solid;
  margin: 10px auto;
  padding: 20px;
  border-radius: 15px;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0px -17px 20px rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

const StyledControlsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
