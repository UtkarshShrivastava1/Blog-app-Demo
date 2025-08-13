const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");

//verifyAdminToken
const verifyAdminToken = require("../middleware/auth");

const router = express.Router();
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", verifyAdminToken, createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
