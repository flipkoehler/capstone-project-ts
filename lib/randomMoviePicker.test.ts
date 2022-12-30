import randomMoviePicker from "./randomMoviePicker";
import { movieData } from "../assets/data/testMovieData";

test("there should be a random number between 0 and length of the array", () => {
  const result = randomMoviePicker(movieData);
  const resultId = result.id;
  const ids = movieData.map((movie: { id: number }) => {
    return movie.id;
  });
  expect(ids).toContain(resultId);
});
