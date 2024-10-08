const express = require("express")
const router = express.Router()
const controller = require("../controller/CompanyController")

router.get('/:company_id', controller.getCompany)
router.get('/', controller.getAllData)
router.post('/', controller.addCompany)
router.put('/:company_id', controller.updateCompany)
router.delete('/:id', controller.deleteCompany)
router.post('/login', controller.login)

module.exports = router;