const express = require("express");

const protect = require("../midllewares/protect");
const userController = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/getme").get(userController.getMe, userController.getUser);
module.exports = router;
