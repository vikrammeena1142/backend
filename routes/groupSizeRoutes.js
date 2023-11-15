const express = require("express");
const router = express.Router();
const groupSizeController = require("../controllers/groupSizeController");

router
  .route("/")
  .get(groupSizeController.getAllgroupSizes)
  .post(groupSizeController.createNewgroupSize)
  .patch(groupSizeController.updategroupSize)
  .delete(groupSizeController.deletegroupSize);
router.route("/:id").get(groupSizeController.getgroupSize);

module.exports = router;
