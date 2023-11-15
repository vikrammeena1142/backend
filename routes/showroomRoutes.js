const express = require("express");
const router = express.Router();
const showroomController = require("../controllers/showroomController");

router
  .route("/")
  .get(showroomController.getAllShowrooms)
  .post(showroomController.createNewShowroom)
  .patch(showroomController.updateShowroom)
  .delete(showroomController.deleteShowroom);
router.route("/:id").get(showroomController.getShowroom);

module.exports = router;
