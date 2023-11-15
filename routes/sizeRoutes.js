const express = require("express");
const router = express.Router();
const sizeController = require("../controllers/sizeController");

router
  .route("/")
  .get(sizeController.getAllSizes)
  .post(sizeController.createNewSize)
  .patch(sizeController.updateSize)
  .delete(sizeController.deleteSize);
router.route("/:id").get(sizeController.getSize);

module.exports = router;
