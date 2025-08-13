const Blog = require("../model/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: "Blog not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const newBlog = await Blog.create({ title, content, image });
  res.status(201).json(newBlog);
};

exports.updateBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    { title, content, image },
    { new: true }
  );
  if (!updatedBlog) return res.status(404).json({ msg: "Blog not found" });
  res.json(updatedBlog);
};

exports.deleteBlog = async (req, res) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  if (!deletedBlog) return res.status(404).json({ msg: "Blog not found" });
  res.json({ msg: "Blog deleted successfully" });
};
