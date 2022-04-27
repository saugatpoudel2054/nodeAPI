const router = require("express").Router();
let AuthController = require('../controllers/auth.controller');
let auth_controller = new AuthController();

router.get("/login", auth_controller.login);

//export app default export
module.exports = router;

//named export
// module.exports = {
//     router: app
// };