import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import AddStepOne from "./AddStepOne";
import MoviePreview from "./MoviePreview";
import AddStepTwoAndThree from "./AddStepTwoAndThree";

export default function AddAMovie() {
  const [searchResults, setSearchResults] = useState({ results: [] });
  const [pickedMovie, setPickedMovie] = useState();
  const router = useRouter();
  const TMDB_KEY = process.env.NEXT_PUBLIC_MOVIEAPI_KEY;
  const [currentStep, setCurrentStep] = useState(0);

  // 1 Step: Search for movies that match the searchterm
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

  // 3 Step: set the current step and check where to "route" the user
  function handleNext(event, passedData) {
    event.preventDefault();
    currentStep === 0 || currentStep === 1
      ? setCurrentStep(currentStep + 1)
      : handleCreateData(event, passedData);
  }

  // 4 Step: Send the generated data to the database
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
    <StyledContentBox>
      <h1>Film hinzufügen 🪄</h1>
      <p>Schritt {currentStep + 1} von 3</p>
      {/* Preview of the picked Movie  */}
      {pickedMovie !== undefined && <MoviePreview pickedMovie={pickedMovie} />}
      {/* Search Field  */}
      {currentStep === 0 ? (
        <AddStepOne
          onHandleSearch={handleSearch}
          searchResults={searchResults}
        />
      ) : currentStep === 1 ? (
        <AddStepTwoAndThree
          onHandleNext={handleNext}
          pickedMovie={pickedMovie}
          category={"mood"}
        />
      ) : currentStep === 2 ? (
        <AddStepTwoAndThree
          onHandleNext={handleNext}
          pickedMovie={pickedMovie}
          category={"occasion"}
        />
      ) : currentStep === 3 ? (
        <p>Step 4</p>
      ) : (
        <p>Ende</p>
      )}

      {/* Add movie Button */}
      {currentStep === 0 && (
        <form onSubmit={() => handleNext(event, pickedMovie)}>
          <button
            type="submit"
            disabled={pickedMovie !== undefined ? false : true}
          >
            Weiter
          </button>
        </form>
      )}
      {/* Movie list based on the search term */}

      {currentStep === 0 && (
        <>
          {searchResults.results.length > 0 && (
            <StyledHeadlineSearchResultsh2>
              Deine Suchergebnisse:
            </StyledHeadlineSearchResultsh2>
          )}
          <StyledSearchResultParent aria-label="search results">
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
        </>
      )}
    </StyledContentBox>
  );
}

const StyledContentBox = styled.div`
  max-width: 900px;
  margin: 2rem;
  @media (max-width: 650px) {
    margin: 2rem 1rem;
  }
`;

// Search Result List
const StyledSearchResultParent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchResult = styled.div`
  display: flex;
  border: 2px solid var(--lightGray);
  background-color: var(--globalWhite);
  width: 50%;
  padding: 3px;

  &:hover {
    background-color: var(--lightGray);
    border: 2px solid var(--darkBlue);
    cursor: pointer;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const StyledHeadlineSearchResultsh2 = styled.h2`
  margin-top: 2.5rem;
`;

const ImageDiv = styled.div`
  width: 60px;
`;
