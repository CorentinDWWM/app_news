const { getAllPost, addPost } = require("../controllers/post.controller");

const router = require("express").Router();

// localhost:3000/post

router.get("/", getAllPost);
router.post("/add", addPost);

module.exports = router;
