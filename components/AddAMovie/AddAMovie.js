import { useEffect, useState } from "react";
import useFetch from "../../lib/fetch";
// import getMovieData from "../../lib/getMovieData";

export default function AddAMovie() {
  const [data, setData] = useState(null);
  console.log(data);

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

  function handleSubmit() {
    preventDefault();
    const addedUrl = event.target.addmovie.value;
    setMovieData(addedUrl);

    console.log("formular abgeschickt");
  }

  return (
    <section>
      <h1>Einen neuen Film hinzufügen 🪄</h1>

      <p>Hier steht ein Text</p>
      <form onSubmit={() => handleClick(event)}>
        <label htmlFor="addmovie">Film hinzufügen</label>
        <input
          type="text"
          class="form-control"
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
