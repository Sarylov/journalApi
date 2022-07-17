const { Router } = require("express");
const router = Router();
const controller = require("../controllers/register");

router.post("/", controller.addPraeposter);
router.patch("/:id", controller.updatePraeposter);

module.exports = router;
