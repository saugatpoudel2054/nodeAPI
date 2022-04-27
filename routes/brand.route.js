let router = require('express').Router();
let BrandController = require('../controllers/brand.controller');
let brand_controller = new BrandController();

router.route('/brand')
    .get(brand_controller.getBrand)
    .post(brand_controller.postBrand)

router.route('/brand/:id')
    .get(brand_controller.getIndividualBrand)
    .post(brand_controller.postIndividualBrand)

module.exports = router;