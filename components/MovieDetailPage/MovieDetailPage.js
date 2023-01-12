// This function generates the movie detail page, which shows all passed data to one picked Movie
import Header from "../Header/Header";
import ReadMore from "../ReadMoreText/ReadMoreText";
import Image from "next/image";
import styled from "styled-components";
import { movieMood } from "../../assets/data/moods";
import Link from "next/link";
import { questionAnswer } from "../../assets/data/questionData";

export default function MovieDetailPage({ passedMovie }) {
  return (
    <>
      <Header />

      {/* Main Content Styling */}
      <MainContentDiv>
        <ImageWrap>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500/${passedMovie.poster_path}`}
            alt={passedMovie.title}
            layout="responsive"
            width={203}
            height={304}
            priority
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
          {passedMovie.trailer !== undefined && (
            <StyledLink href={passedMovie.trailer} target="_blank">
              Trailer ansehen
            </StyledLink>
          )}
        </StyledSection>
      </MainContentDiv>

      {/* Benefits for the Movie  */}
      <StyledBoxAroundDiv>
        <StyledParentDiv>
          <StyledImageContainerDiv>
            <Image
              src={"/images/clarity_bullseye-line.svg"}
              width={45}
              height={45}
              alt={"bullseye"}
            />
          </StyledImageContainerDiv>
          <p>Welche Stimmung hat der Film?</p>
          <MovieTagsUlshort>
            {movieMood
              .filter((mood) => passedMovie.mood.includes(mood.id))
              .map((mood, index) => (
                <MovieTagsSmall key={index}>{mood.value}</MovieTagsSmall>
              ))}
          </MovieTagsUlshort>
        </StyledParentDiv>
        <StyledParentDiv>
          <StyledImageContainerDiv>
            <Image
              src={"/images/clarity_users-line.svg"}
              width={45}
              height={45}
              alt={"bullseye"}
            />
          </StyledImageContainerDiv>
          <p>Mit wem kann man den Film schauen?</p>
          <MovieTagsUlshort>
            {questionAnswer[3].answerOptions
              .filter((occasion) => passedMovie.occasion.includes(occasion.id))
              .map((occasion, index) => (
                <MovieTagsSmall key={index}>{occasion.answer}</MovieTagsSmall>
              ))}
          </MovieTagsUlshort>
        </StyledParentDiv>
      </StyledBoxAroundDiv>

      {/* Recommendation Text for the movie  */}
      {passedMovie.comment !== undefined && (
        <RecommendationContenBoxDiv>
          <RecommendationContent>
            <Styledh3>Warum lohnt sich dieser Film?</Styledh3>
            <CommentStyledSpan>"{passedMovie.comment}"</CommentStyledSpan>
            <StyledMoodImage
              src={"/images/quiz_mood_movieflip.svg"}
              alt={passedMovie.title}
              width={250}
              height={180}
            />
          </RecommendationContent>
        </RecommendationContenBoxDiv>
      )}
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
  padding: 2rem;

  @media screen and (max-width: ${breakpoint}) {
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

// Recommendation Content Box

const RecommendationContenBoxDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 1rem 5rem 1rem;
`;

const Styledh3 = styled.h3`
  width: 100%;
`;
const CommentStyledSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  font-style: italic;
  flex-wrap: wrap;
  flex: 60%;
`;

const RecommendationContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 60%;
  @media screen and (max-width: ${breakpoint}) {
    flex: 100%;
  }
`;

const StyledMoodImage = styled(Image)`
  flex: 30%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${breakpoint}) {
    max-width: 15rem;
  }
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
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
`;

const MovieTagsSmall = styled.li`
  color: var(--smokey-Black);
  list-style: none;
  padding: 5px 20px;
  margin: 1rem 1rem 0 0;
  background-color: var(--globalWhite);
  border-radius: 3rem;
  font-size: 0.9rem;
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

const StyledLink = styled(Link)`
  max-width: 12rem;
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

// Benefits

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
  max-width: 23rem;
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
  display: flex;
  flex-wrap: wrap;
`;
