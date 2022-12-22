import { useState } from "react";

export default function AddAMovie() {
  const defaultArrayForTheSearch = {
    results: [],
  };

  const [searchResults, setSearchResults] = useState(defaultArrayForTheSearch);
  const [pickedMovie, setPickedMovie] = useState();
  console.log(pickedMovie, "picked");

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
      <form onSubmit={() => handleSearch(event)}>
        <h1>Einen neuen Film hinzufügen 🪄</h1>
        <p>Bitte Film suchen</p>
        <label htmlFor="searchMovie"> </label>
        Film hinzufügen
        <input
          type="text"
          name="searchMovie"
          placeholder="z.B.: napoleon dynamite"
          required="required"
        />
        <button type="submit">Film suchen</button>
      </form>
      <ul>
        {searchResults.results.map((movie, index) => {
          return (
            <li key={index} onClick={() => getDetailData(movie)}>
              {movie.title} ({movie.release_date})
            </li>
          );
        })}
      </ul>
      <form onSubmit={() => handleCreateData(event, pickedMovie)}>
        <button type="submit">Film jetzt einreichen</button>
      </form>
    </section>
  );
}
