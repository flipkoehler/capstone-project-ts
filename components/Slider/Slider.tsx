import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

interface SliderContent {
  id: number;
  title: string;
  content: string;
  buttonText: string;
  isButtonDissabled: boolean;
}

type SliderContentArrayType = {
  sliderContent: SliderContent[];
};

export default function Slider({ sliderContent }: SliderContentArrayType) {
  // setup for the slider modul
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    align: "start",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // this modul shows content an the main page
  return (
    <>
      <StyledSliderContainerDiv ref={emblaRef}>
        <StyledSliderContainerParentDiv>
          {sliderContent.map((content) => {
            return (
              <StyledSliderItemDiv>
                <StyledHeadlineDiv>
                  <StyledNumberDiv>{content.id}</StyledNumberDiv>
                  <h3>{content.title}</h3>
                </StyledHeadlineDiv>
                <p>{content.content}</p>
                <StyledLink href="/quiz">{content.buttonText}</StyledLink>
              </StyledSliderItemDiv>
            );
          })}
        </StyledSliderContainerParentDiv>
      </StyledSliderContainerDiv>
      <StyledControlsDiv>
        <StyledButton onClick={scrollPrev}>
          <Image
            src={"/images/clarity_arrow-line_left.svg"}
            width={30}
            height={30}
            alt="go back"
          />
        </StyledButton>
        <StyledButton onClick={scrollNext}>
          <Image
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
  padding: 2rem;
  margin: 1rem;
  @media screen and (max-width: 600px) {
    flex: 0 0 95%;
    margin: 0 0.8rem 0 1rem;
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
