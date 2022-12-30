/// This function is rendering through the passed movie data array and is picking one random movie.

export default function randomMoviePicker(moviesToShuffle: any) {
  const randomNumber = Math.floor(Math.random() * moviesToShuffle.length);
  const pickedMovie = moviesToShuffle[randomNumber];
  return pickedMovie;
}
