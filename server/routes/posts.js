import express from "express";

const router = express.Router();

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  viewPost,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", viewPost);

export default router;
