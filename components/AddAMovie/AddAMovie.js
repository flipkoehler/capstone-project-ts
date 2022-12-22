import { useEffect, useState } from "react";
import useFetch from "../../lib/fetch";
// import getMovieData from "../../lib/getMovieData";

export default function AddAMovie() {
  const [data, setData] = useState(null);
  // const [card, setCard] = useState([]);
  console.log(data);

  // const testData = {
  //   backdrop_path: "/veiWT3UYVvEOGCfGZLGDJtjJvdV.jpg",
  //   title: "testi",
  // };

  const handleChange = async () => {
    event.preventDefault();
    const addedUrl = event.target.value;

    try {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${addedUrl}?api_key=e69cd3d9de9dbb86cdfd7f170e8fae1b`
        )
      ).json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // async function getMovies() {
  //   const response = await fetch("/api/");
  //   const questionList = await response.json();
  //   setCard(questionList);
  // }

  // useEffect(() => {
  //   getMovies();
  // }, []);

  async function createData(passedData) {
    event.preventDefault();

    await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passedData),
    });
  }

  function handleSubmit(event, movie) {
    console.log(movie, "movie");
    event.preventDefault();
    // const postData = data;
    // console.log("huhutesti", postData);
    createData(movie);
  }

  return (
    <section>
      <h1>Einen neuen Film hinzufügen 🪄</h1>

      <p>Hier steht ein Text</p>
      <form onSubmit={() => handleSubmit(event, data)}>
        <label htmlFor="addmovie">Film hinzufügen</label>
        <input
          type="text"
          className="form-control"
          name="addmovie"
          placeholder="z.B.: https://www.themoviedb.org/movie/8193-napoleon-dynamite"
          onChange={() => handleChange()}
          required="required"
        />
        {/* {(if (data !== null) {
            return "test"} 
            if (status_code === 34) return { ""
            }
            else return "huhu")} */}

        <p>
          {data !== null ? "Die Zahl ist gültig" : "Bitte eine Zahl eingeben"}
        </p>
        <button type="submit">Film jetzt einreichen</button>
      </form>
    </section>
  );
}
