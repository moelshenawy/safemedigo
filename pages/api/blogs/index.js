import { blogs } from "../../../data/blogs";

export default function handler(req, res) {
  res.status(200).json(blogs);
}
