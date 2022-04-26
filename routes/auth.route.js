const router = require("express").Router();

router.get("/login", (req, res, next) => {
    res.status(200).json({
        result: "Login page",
        status: true,
        msg: 'Login page page'
    });
});

//export app default export
module.exports = router;

//named export
// module.exports = {
//     router: app
// };