const express = require("express")
const router = express.Router()
const controller = require('../controller/ProductController')

router.post('/', controller.createProduct)
router.get('/:company_id', controller.getProduct)
router.delete('/:id', controller.deleteProduct)
router.put('/:id', controller.updateproducts)

module.exports = router;