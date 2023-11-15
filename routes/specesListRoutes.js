const express = require("express");
const router = express.Router();
const specesListController = require("../controllers/specesListController");

router
  .route("/")
  .get(specesListController.getAllspecesLists)
  .post(specesListController.createNewspecesList)
  .patch(specesListController.updatespecesList)
  .delete(specesListController.deletespecesList);
router.route("/:id").get(specesListController.getspecesList);

module.exports = router;
