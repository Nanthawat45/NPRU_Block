const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const {upload} = require("../middlewares/fike.middleware")
const authJwt = require("../middlewares/auth.Jwt.middlewares");
 //http://localhost:5000/api/v1/post

router.post("", authJwt.verifyToken, upload, postController.createPost);

 //http://localhost:5000/api/v1/post
router.get("", postController.getPosts);
module.exports = router;