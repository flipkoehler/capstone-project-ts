/// This function is rendering through the passed movie data array and is picking one random movie to show.

import { useEffect, useState } from "react";
import Image from "next/image";
import { ReadMore } from "../../components/ReadMoreText/ReadMoreText";
import Header from "../../components/Header/Header";
import styled from "styled-components";

export default function RandomMoviePicker({ movieArray }) {
  const [randomPick, setRandomPick] = useState(0); // picks a random number
  const listItems = movieArray.map((movie) => <li key={movie.id}></li>); // map through the movie Array
  const productionYear = movieArray[randomPick].release_date.slice(0, 4); // slices down the production year, e.g. 2014-12-04 > 2014
  useEffect(() => {
    setRandomPick(Math.floor(Math.random() * listItems.length));
  }, [listItems.length]); // calculates a random number on a page load

  // return the movie details bassed on the random number
  return (
    <>
      <Header />
      <SectionStyled aria-label="movie content">
        <ImageWrap aria-label="Image Wrap Div">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movieArray[randomPick].poster_path}`}
            alt={movieArray[randomPick].title}
            width={203}
            height={304}
          />
        </ImageWrap>
        <h2>{movieArray[randomPick].title}</h2>
        <MovieTagsUl>
          <MovieTags>{movieArray[randomPick].runtime} Minuten</MovieTags>
          <MovieTags>{movieArray[randomPick].genres[0].name}</MovieTags>
          <MovieTags>Jahr: {productionYear}</MovieTags>
        </MovieTagsUl>
        <ReadMore aria-label="mehr lesen oder weniger lesen">
          {movieArray[randomPick].overview}
        </ReadMore>
      </SectionStyled>
    </>
  );
}

// CSS Styling for the main section
const SectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--globalWhite);
  text-align: center;
  padding: 20px;
  border-radius: 30px 30px 0px 30px;
  margin: 5px;
`;

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
`;

const MovieTags = styled.li`
  color: var(--globalWhite);
  list-style: none;
  padding: 5px 20px;
  margin: 5px 5px;
  background-color: var(--smokeyBlack);
  border-radius: 10px;
`;
