const express = require("express")
const router = express.Router()
const controller = require("../controller/teamController")

router.put('/:company_id', controller.updateTeams)
router.post('/', controller.createTeam)
router.get('/:company_id', controller.getTeam)

module.exports = router;