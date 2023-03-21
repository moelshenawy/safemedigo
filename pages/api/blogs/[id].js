import { blogs } from "../../../data/blogs";

export default function handler(req, res) {
  let id = req.query.id;

  let blog = blogs.filter((p) => p.id == id);

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(400).json({ err: "There's no Blog" });
  }
}
