import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import ReadMore from "../ReadMoreText/ReadMoreText";
import { useRouter } from "next/router";

export default function AddAMovie() {
  const [searchResults, setSearchResults] = useState({ results: [] });
  const [pickedMovie, setPickedMovie] = useState();
  const router = useRouter();

  // 1 Step: Serch for movies that machtes the searchterm
  async function handleSearch(event) {
    event.preventDefault();
    const searchKeyWord = event.target.searchMovie.value;
    try {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=e69cd3d9de9dbb86cdfd7f170e8fae1b&query=${searchKeyWord}&language=de`
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
          `https://api.themoviedb.org/3/movie/${movieToGetDetailsFor}?api_key=e69cd3d9de9dbb86cdfd7f170e8fae1b&language=de`
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

  // The output including a form and a submit button
  return (
    <section>
      <StyledForm onSubmit={() => handleSearch(event)}>
        <StyledH1>Einen neuen Film hinzufügen 🪄</StyledH1>
        <p>
          Schritt 1: Suche nach dem passenden Film und wähle aus der
          Ergebnisliste mit Klick den richtigen Film aus.
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

        <StyledSpan>
          {searchResults.results.length > 19 &&
            "Der eingegeben Suchbegriff hat mehr als 20 Treffer. Bitte verfeinere deine Eingabe für bessere Suchergebnisse."}
          {searchResults.total_pages === 0 &&
            "Es wurde kein passender Eintrag zu deinem Suchbegriff gefunden. Bitte verwende einen anderen Suchbegriff."}
        </StyledSpan>
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
      <form onSubmit={() => handleCreateData(event, pickedMovie)}>
        <button
          type="submit"
          disabled={pickedMovie !== undefined ? false : true}
        >
          Film jetzt einreichen
        </button>
      </form>
      <StyledSearchResultParent>
        {searchResults.results.map((movie, index) => {
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
              {movie.title} {movie.release_date?.slice(0, 4)}
            </StyledSearchResult>
          );
        })}
      </StyledSearchResultParent>
    </section>
  );
}

// Searchbar (Div around, Input and Button)

const StyledSearchBarWrapper = styled.div`
  display: flex;
  border: 2px solid var(--smokeyBlack);
  border-radius: 15px;
  align-items: center;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 175px;
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

// Search Results
const StyledSearchResultParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Search Result

const StyledSearchResult = styled.div`
  display: flex;
  margin: 5px;
  width: 300px;
  background-color: var(--lightGray);
  align-items: center;

  /* border: 2px solid var(--smokeyBlack); */
  padding: 2px;

  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const StyledH1 = styled.h1`
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 60px;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
  text-align: center;
  font-style: italic;
  width: 80%;
  margin-top: 10px;
`;

const StyledPickedMoviePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 2px solid var(--lightGray);
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0px -17px 20px rgba(0, 0, 0, 0.07);
`;
