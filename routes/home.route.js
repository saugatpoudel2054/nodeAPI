const router = require("express").Router();
const HOMECONTROLLER = require('../controllers/home.controller');
const home_controller = new HOMECONTROLLER();

router.get("/", home_controller.getHomePage);

router.get("/about", home_controller.getAboutPage);

module.exports = router;