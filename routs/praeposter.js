const { Router } = require("express");
const router = Router();
const controller = require("../controllers/praeposter");

router.get("/:id", controller.getPraeposter);
router.get("/:id/posts", controller.getPosts);
router.get("/:id/post/:idPost", controller.getOnePost);
router.get("/:id/posts/:day/:mount/:year", controller.getPostDay);
router.post("/:id/posts", controller.addPost);
router.patch("/:id/posts", controller.updatePost);

module.exports = router;
