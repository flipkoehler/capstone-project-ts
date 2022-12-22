import mongoose from "mongoose";

const { Schema } = mongoose;

const genresChildSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

const movieSchema = new Schema({
  // _id: { type: String, required: false },
  backdrop_path: { type: String, required: false },
  genres: [genresChildSchema],
  id: { type: Number, required: true },
  imdb_id: { type: String, required: false },
  original_language: { type: String, required: false },
  original_title: { type: String, required: false },
  overview: { type: String, required: true },
  popularity: { type: Number, required: false },
  poster_path: { type: String, required: true },
  release_date: { type: String, required: true },
  runtime: { type: Number, required: true },
  status: { type: String, required: false },
  tagline: { type: String, required: false },
  title: { type: String, required: true },
  video: { type: Boolean, required: true },
  vote_average: { type: Number, required: true },
  vote_count: { type: Number, required: true },
});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
