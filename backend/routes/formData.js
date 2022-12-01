const express = require("express");
const router = express.Router();
const personalInfoController = require("../controllers/personalInfoController");
const contactDetailsController = require("../controllers/contactDetailsController");
const aboutYouController = require("../controllers/aboutYouController");
const interestController = require("../controllers/interestController");

const protect = require("../midllewares/protect");

router.use(protect);

router
  .route("/pInfo")
  .post(personalInfoController.createPersonalInfo)
  .get(personalInfoController.getPersonalInfo);
router
  .route("/contactDetails")
  .post(contactDetailsController.createContactDetails)
  .get(contactDetailsController.getContactDetails);
router
  .route("/aboutYou")
  .post(aboutYouController.createAboutYou)
  .get(aboutYouController.getAboutYou);
router
  .route("/interest")
  .post(interestController.createInterest)
  .get(interestController.getInterest);

module.exports = router;
