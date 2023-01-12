import styled from "styled-components";
import Image from "next/image";

export default function AddStepOne({ onHandleSearch, searchResults }) {
  // this function is for searching a movie (searchbar and button)

  return (
    <StyledForm onSubmit={() => onHandleSearch(event)}>
      <h3>Suche nach dem passenden Film</h3>
      <label htmlFor="searchMovie"> </label>
      <StyledSearchBarWrapper>
        <StyledInput
          type="text"
          name="searchMovie"
          placeholder='z.B.: "Napoleon Dynamite"'
          required
          aria-label="search for a movie"
        />

        <StyledButton
          type="submit"
          aria-label="search for the movie"
          name="search-movie"
        >
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
    </StyledForm>
  );
}

// Searchbar
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchBarWrapper = styled.div`
  display: flex;
  border: 0.1rem solid var(--smokeyBlack);
  background-color: var(--globalWhite);
  border-radius: 1.5rem;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 1.5rem;
  border: none;
  margin-left: 0.5rem;
  // eliminates the outline when focused and the background color when autofill is used
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  -webkit-autofill:hover,
  -webkit-autofill:focus {
    box-shadow: 0 0 0px 4rem #ffff inset;
  }
`;
const StyledButton = styled.button`
  background-color: transparent;
  box-shadow: none;
  width: 4rem;
  height: 2rem;
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
  margin-top: 1rem;
`;
