import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function AddAMovie({ entryIsClicked }) {
  const defaultArrayForTheSearch = {
    results: [],
  };

  const [searchResults, setSearchResults] = useState(defaultArrayForTheSearch);
  const [pickedMovie, setPickedMovie] = useState();
  console.log(pickedMovie);

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

  // 2 Step: Get the detail movie data - and set the picked movie

  async function getDetailData(passedData) {
    console.log(passedData);
    const movieToGetDetailsFor = passedData.id;
    console.log(movieToGetDetailsFor, "moviestogetdetailsfor");
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
  }

  // 4 Step: generate the html

  return (
    <section>
      <StyledForm onSubmit={() => handleSearch(event)}>
        <StyledH1>Einen neuen Film hinzufügen 🪄</StyledH1>
        <p>
          Schritt 1: Suche nach dem passenden Film und wähle aus der
          Ergebnisliste mit Klick den richtigen Film aus.
        </p>
        <label htmlFor="searchMovie"> </label>

        <StyledInput
          type="text"
          name="searchMovie"
          placeholder='z.B.: "Napoleon Dynamite"'
          required="required"
        />
        <StyledButton type="submit">🔍</StyledButton>
        <StyledSpan>
          {searchResults.results.length > 19 &&
            "Der eingegeben Suchbegriff hat mehr als 20 Treffer. Bitte verfeinere deine Eingabe für bessere Treffer."}
          {searchResults.total_pages === 0 &&
            "Es wurde kein passender Eintrag zu deinem Suchbegriff gefunden. Bitte verwende einen anderen Suchbegriff."}
        </StyledSpan>
      </StyledForm>
      <StyledSearchResultParent>
        {searchResults.results.map((movie, index) => {
          return (
            <StyledSearchResult
              key={movie.id}
              onClick={() => getDetailData(movie)}
            >
              <ImageDiv>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width={40}
                  height={50}
                  priority
                />
              </ImageDiv>
              {movie.title} ({movie.release_date})
            </StyledSearchResult>
          );
        })}
      </StyledSearchResultParent>
      <form onSubmit={() => handleCreateData(event, pickedMovie)}>
        {pickedMovie !== undefined && (
          <button type="submit">Film jetzt einreichen</button>
        )}
      </form>
    </section>
  );
}

const StyledSearchResult = styled.div`
  display: flex;
  margin: 5px;
  width: 300px;
  border: 2px solid var(--smokeyBlack);
  padding: 2px;

  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
`;

const StyledSearchResultParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledInput = styled.input`
  border: 3px solid var(--smokeyBlack);
  border-radius: 15px;
  width: 200px;
  height: 50px;
  margin: 0 0 20px 0;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0 0 20px 20px;
`;

const StyledH1 = styled.h1`
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 60px;
`;

const StyledSpan = styled.span`
  font-size: 0.9rem;
  text-align: center;
  font-style: italic;
  width: 80%;
  margin: 20px;
`;
