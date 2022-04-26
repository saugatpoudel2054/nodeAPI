let router = require('express').Router();

router.route('/brand')
    .get((req, res, next) => {
        console.log("GET request called");
        res.status(200).json({
            result: "Brand page",
            status: true,
            msg: 'Brand page'
        });
    })
    .post((req, res, next) => {
        console.log("POST request called");
        res.status(200).json({
            result: "Brand page POST",
            status: true,
            msg: 'Brand page post'
        });
    })

router.route('/brand/:id')
    .get((req, res, next) => {
        console.log("GET request called");
        res.status(200).json({
            result: "Brand page with id",
            status: true,
            msg: 'Brand page with id'
        });
    })
    .post((req, res, next) => {
        console.log("POST request called");
        res.status(200).json({
            result: "Brand page POST with id",
            status: true,
            msg: 'Brand page post with id'
        });
    })

module.exports = router;