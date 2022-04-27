class BrandController {
    getBrand = (req, res, next) => {
        console.log("GET request called");
        res.status(200).json({
            result: "Brand page",
            status: true,
            msg: 'Brand page'
        });
    }

    postBrand = (req, res, next) => {
        console.log("POST request called");
        res.status(200).json({
            result: "Brand page POST",
            status: true,
            msg: 'Brand page post'
        });
    }

    getIndividualBrand = (req, res, next) => {
        console.log("GET request called");
        res.status(200).json({
            result: "Brand page with id",
            status: true,
            msg: 'Brand page with id'
        });
    }

    postIndividualBrand = (req, res, next) => {
        console.log("POST request called");
        res.status(200).json({
            result: "Brand page POST with id",
            status: true,
            msg: 'Brand page post with id'
        });
    }
}

module.exports = BrandController;