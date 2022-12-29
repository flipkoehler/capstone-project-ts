import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import ReadMore from "../ReadMoreText/ReadMoreText";
import { useRouter } from "next/router";

export default function AddAMovie() {
  const [searchResults, setSearchResults] = useState({ results: [] });
  const [pickedMovie, setPickedMovie] = useState();
  const router = useRouter();
  const TMDB_KEY = process.env.NEXT_PUBLIC_MOVIEAPI_KEY;

  // 1 Step: Serch for movies that machtes the searchterm
  async function handleSearch(event) {
    event.preventDefault();
    const searchKeyWord = event.target.searchMovie.value;
    try {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${searchKeyWord}&language=de`
        )
      ).json();
      setSearchResults(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  // 2 Step: Get the detail movie data, based on the picked movie
  async function getDetailData(passedData) {
    const movieToGetDetailsFor = passedData.id;
    try {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieToGetDetailsFor}?api_key=${TMDB_KEY}&language=de`
        )
      ).json();
      setPickedMovie(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  // 3 Step: Send the generated data to the database
  async function handleCreateData(event, passedData) {
    event.preventDefault();
    await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passedData),
    });
    router.push(`/movies/${passedData.id}`);
  }

  return (
    <section>
      {/* Search Field  */}
      <StyledForm onSubmit={() => handleSearch(event)}>
        <h1>Einen neuen Film hinzufügen 🪄</h1>
        <p>
          Suche nach dem passenden Film und wähle aus der Ergebnisliste mit
          Klick den richtigen Film aus.
        </p>
        <label htmlFor="searchMovie"> </label>
        <StyledSearchBarWrapper>
          <StyledInput
            type="text"
            name="searchMovie"
            placeholder='z.B.: "Napoleon Dynamite"'
            required="required"
          />

          <StyledButton type="submit">
            <Image
              src={"/images/clarity_search-line.svg"}
              width={25}
              height={25}
              alt="Search Icon"
            />
          </StyledButton>
        </StyledSearchBarWrapper>
        {/* Notes that only will show up if the search term matches one of the conditions */}
        <StyledSpan>
          {searchResults.results.length > 19 &&
            "Der eingegeben Suchbegriff hat mehr als 20 Treffer. Bitte verfeinere deine Eingabe für bessere Suchergebnisse."}
          {searchResults.total_pages === 0 &&
            "Es wurde kein passender Eintrag zu deinem Suchbegriff gefunden. Bitte verwende einen anderen Suchbegriff."}
        </StyledSpan>
        {/* Preview of the picked Movie  */}
        {pickedMovie !== undefined && (
          <StyledPickedMoviePreview>
            <>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${pickedMovie.poster_path}`}
                  alt={pickedMovie.title}
                  width={142}
                  height={213}
                  priority
                />
              </div>
              <div>
                <p>Deine aktuelle Filmauswahl:</p>
                <h2>{pickedMovie.title}</h2>
                <p>{pickedMovie.runtime} Minuten</p>
                <p>Aus dem Jahr: {pickedMovie.release_date.slice(0, 4)} </p>
              </div>

              <ReadMore>{pickedMovie.overview}</ReadMore>
            </>
          </StyledPickedMoviePreview>
        )}
      </StyledForm>
      {/* Add movie Button */}
      <form onSubmit={() => handleCreateData(event, pickedMovie)}>
        <button
          type="submit"
          disabled={pickedMovie !== undefined ? false : true}
        >
          Film hinzufügen
        </button>
      </form>
      {/* Movie list based on the search term */}
      <StyledSearchResultParent>
        {searchResults.results.map((movie) => {
          return (
            <StyledSearchResult
              key={movie.id}
              onClick={() => getDetailData(movie)}
            >
              {movie.poster_path ? (
                <ImageDiv>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    width={40}
                    height={50}
                    priority
                  />
                </ImageDiv>
              ) : (
                <ImageDiv></ImageDiv>
              )}
              {movie.title} ({movie.release_date?.slice(0, 4)})
            </StyledSearchResult>
          );
        })}
      </StyledSearchResultParent>
    </section>
  );
}

// Searchbar
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchBarWrapper = styled.div`
  display: flex;
  border: 2px solid var(--smokeyBlack);
  border-radius: 15px;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  margin-left: 5px;
  // eliminates the outline when focused and the background color when autofill is used
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  -webkit-autofill:hover,
  -webkit-autofill:focus {
    box-shadow: 0 0 0px 40rem #ffff inset;
  }
`;
const StyledButton = styled.button`
  background-color: transparent;
  box-shadow: none;
  width: 50px;
  height: 25px;
  border: none;
  margin: 0px;
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

// Notes for the search result
const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  width: 100%;
  margin-top: 10px;
`;

// Search Result List
const StyledSearchResultParent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchResult = styled.div`
  display: flex;
  border: 2px solid var(--globalWhite);
  background-color: var(--lightGray);
  width: 50%;
  padding: 3px;

  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ImageDiv = styled.div`
  width: 60px;
`;

// Movie Preview
const StyledPickedMoviePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 2px solid var(--lightGray);
  padding: 10px;
  margin: 15px;
  border-radius: 15px;
  box-shadow: 0px -17px 20px rgba(0, 0, 0, 0.07);
`;
