// This function generates the movie details
import Header from "../Header/Header";
import ReadMore from "../ReadMoreText/ReadMoreText";
import Image from "next/image";
import styled from "styled-components";

export default function MovieDetailPage({ passedMovie }) {
  console.log("MovieDetailPage", passedMovie);
  return (
    <>
      <Header />
      <section>
        <ImageWrap>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500/${passedMovie.poster_path}`}
            alt={passedMovie.title}
            width={203}
            height={304}
            priority
          />
        </ImageWrap>
        <StyledH2>{passedMovie.title}</StyledH2>
        <MovieTagsUl>
          <MovieTags>{passedMovie.runtime} Minuten</MovieTags>
          <MovieTags>{passedMovie.genres[0].name}</MovieTags>
          {/* <MovieTags>Jahr: {productionYear}</MovieTags> */}
        </MovieTagsUl>
        <ReadMore aria-label="read more or read less">
          {passedMovie.overview}
        </ReadMore>
      </section>
    </>
  );
}

// CSS Styling for the container around the Image
const ImageWrap = styled.div`
  margin: 0 auto;
  box-sizing: content-box;
`;

// CSS Styling for the Movie Tags (ul and li)
const MovieTagsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
`;

const MovieTags = styled.li`
  color: var(--globalWhite);
  list-style: none;
  padding: 5px 20px;
  margin: 5px 5px;
  background-color: var(--smokeyBlack);
  border-radius: 10px;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
`;

const StyledH2 = styled.h2`
  text-align: center;
`;
