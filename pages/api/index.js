import dbConnect from "../../db/dbConnect";
import Movie from "../../db/models/Movie";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const data = req.body;
    const newQuestion = await Movie.create(data);
    res.status(201).json(newQuestion);
  }

  if (req.method === "GET") {
    const movies = await Movie.find();
    res.status(200).json(movies);
  }
}
