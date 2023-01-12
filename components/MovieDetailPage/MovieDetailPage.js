// This function generates the movie detail page, which shows all passed data to one picked Movie
import Header from "../Header/Header";
import ReadMore from "../ReadMoreText/ReadMoreText";
import Image from "next/image";
import styled from "styled-components";
import { movieMood } from "../../assets/data/moods";

export default function MovieDetailPage({ passedMovie }) {
  return (
    <>
      <Header />
      <MainContentDiv>
        <ImageWrap>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500/${passedMovie.poster_path}`}
            alt={passedMovie.title}
            layout="responsive"
            width={203}
            height={304}
            // priority
            // objectFit="fill"
          />
        </ImageWrap>
        <StyledSection>
          <span>Deine Empfehlung</span>
          <StyledH1>{passedMovie.title}</StyledH1>
          <MovieTagsUl>
            <MovieTags>{passedMovie.runtime} Minuten</MovieTags>
            <MovieTags>{passedMovie.genres[0].name}</MovieTags>
            <MovieTags>Jahr: {passedMovie.release_date.slice(0, 4)}</MovieTags>
          </MovieTagsUl>

          <ReadMore aria-label="read more or read less">
            {passedMovie.overview}
          </ReadMore>
        </StyledSection>
      </MainContentDiv>
      <MovieTagsUlshort>
        {movieMood
          .filter((mood) => passedMovie.mood.includes(mood.id))
          .map((mood, index) => (
            <MovieTags key={index}>{mood.value}</MovieTags>
          ))}
      </MovieTagsUlshort>
    </>
  );
}

// Main Content including Image and movie informations

const breakpoint = "630px";

const MainContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem;
  position: relative;
`;

const StyledSection = styled.section`
  flex: 70%;
  box-shadow: 0px -17px 20px rgba(0, 0, 0, 0.07);
`;

const ImageWrap = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 30%;
  position: relative;
  @media screen and (max-width: ${breakpoint}) {
    position: relative;
    flex: 100%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
  position: relative;
  padding: 1rem;

  @media screen and (max-width: ${breakpoint}) {
    background-color: green;
    max-height: 28rem;
    object-fit: cover;
    border-radius: 0px;
    margin: 0 0 -5rem 0;
    padding: 0;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

// CSS Styling for the Movie Tags (ul and li)
const MovieTagsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0;
  margin: 0;
`;

const MovieTagsUlshort = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
`;

const MovieTags = styled.li`
  color: var(--smokey-Black);
  list-style: none;
  padding: 5px 20px;
  margin: 1rem 1rem 0 0;
  background-color: var(--lightGray);
  border-radius: 3rem;
  font-size: 0.9rem;
`;
