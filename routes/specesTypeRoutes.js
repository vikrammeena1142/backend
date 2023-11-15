const express = require("express");
const router = express.Router();
const specesTypeController = require("../controllers/specesTypeController");

router
  .route("/")
  .get(specesTypeController.getAllspecesTypes)
  .post(specesTypeController.createNewspecesType)
  .patch(specesTypeController.updatespecesType)
  .delete(specesTypeController.deletespecesType);
router.route("/:id").get(specesTypeController.getspecesType);

module.exports = router;
