const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        result: "Welcome",
        status: true,
        msg: 'Home page'
    });
});

router.get("/about", (req, res, next) => {
    res.status(200).json({
        result: "About us",
        status: true,
        msg: 'About us'
    });
});

module.exports = router;