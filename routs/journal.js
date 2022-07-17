const { Router } = require("express");
const router = Router();
const controller = require("../controllers/journal");

router.get("/", controller.getPosts);
router.get("/groups", controller.getGroupNames);
router.get("/:id", controller.getPost);

module.exports = router;
