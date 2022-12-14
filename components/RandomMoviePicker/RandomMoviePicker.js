/// This function is rendering through the passed movie data array and is picking one random movie to show.

import { useEffect, useState } from "react";
import Image from "next/image";
import ReadMore from "../../components/ReadMoreText/ReadMoreText";
import Header from "../../components/Header/Header";
import styled from "styled-components";

export default function RandomMoviePicker({ movies }) {
  const [randomPick, setRandomPick] = useState(0); // picks a random number
  const listItems = movies.map((movie) => <li key={movie.id}></li>); // map through the movie Array
  const productionYear = movies[randomPick].release_date.slice(0, 4); // slices down the production year, e.g. 2014-12-04 > 2014
  useEffect(() => {
    setRandomPick(Math.floor(Math.random() * listItems.length));
  }, [listItems.length]); // calculates a random number on a page load

  // return the movie details bassed on the random number
  return (
    <>
      <Header />
      <section>
        <ImageWrap>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500/${movies[randomPick].poster_path}`}
            alt={movies[randomPick].title}
            width={203}
            height={304}
          />
        </ImageWrap>
        <h2>{movies[randomPick].title}</h2>
        <MovieTagsUl>
          <MovieTags>{movies[randomPick].runtime} Minuten</MovieTags>
          <MovieTags>{movies[randomPick].genres[0].name}</MovieTags>
          <MovieTags>Jahr: {productionYear}</MovieTags>
        </MovieTagsUl>
        <ReadMore aria-label="read more or read less">
          {movies[randomPick].overview}
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
