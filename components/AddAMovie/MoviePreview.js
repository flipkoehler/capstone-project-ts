import ReadMore from "../ReadMoreText/ReadMoreText";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export default function MoviePreview({ pickedMovie }) {
  const [detailViewIsClicked, setDetailViewIsClicked] = useState(false);

  return (
    <StyledPickedMoviePreview>
      <StyledPreviewDiv>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${pickedMovie.poster_path}`}
          alt={pickedMovie.title}
          width={47}
          height={71}
          priority
        />
        <StyledSpan>
          <SelectionStyledSpan>
            Deine aktuelle Auswahl: <br></br>
          </SelectionStyledSpan>
          {pickedMovie.title} ({pickedMovie.release_date.slice(0, 4)})
        </StyledSpan>

        {detailViewIsClicked ? (
          <StyledImageArrow
            src={"/images/clarity_caret-line_up.svg"}
            alt={pickedMovie.title}
            width={50}
            height={50}
            priority
            onClick={() => setDetailViewIsClicked(!detailViewIsClicked)}
          />
        ) : (
          <StyledImageArrow
            src={"/images/clarity_caret-line.svg"}
            alt={pickedMovie.title}
            width={50}
            height={50}
            priority
            onClick={() => setDetailViewIsClicked(!detailViewIsClicked)}
          />
        )}
      </StyledPreviewDiv>
      {detailViewIsClicked && (
        <>
          <ReadMore>{pickedMovie.overview}</ReadMore>
          <ImageDiv>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${pickedMovie.poster_path}`}
              alt={pickedMovie.title}
              width={142}
              height={213}
              priority
            />
          </ImageDiv>
        </>
      )}
    </StyledPickedMoviePreview>
  );
}

// Movie Preview Site
const StyledPickedMoviePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 2px solid var(--lightGray);
  padding: 1rem;
  margin: 0.2rem;
  border-radius: 1.2rem;
  box-shadow: 0px -17px 20px rgba(0, 0, 0, 0.07);
  background-color: var(--globalWhite);
`;

const StyledPreviewDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--globalWhite);
  position: relative;
`;

const StyledSpan = styled.span`
  margin: 0 0.5rem 0 1rem;
  max-width: 70%;
`;

const SelectionStyledSpan = styled.span`
  font-size: 0.7rem;
`;

const ImageDiv = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const StyledImageArrow = styled(Image)`
  position: absolute;
  right: 0.1rem;
  top: 1.5rem;
`;
