const express = require("express");
const router = express.Router();
const dealerController = require("../controllers/dealerController");

router
  .route("/")
  .get(dealerController.getAllDealers)
  .post(dealerController.createNewDealer)
  .patch(dealerController.updateDealer)
  .delete(dealerController.deleteDealer);
router.route("/:id").get(dealerController.getDealer);

module.exports = router;
