const express = require("express");
const router = express.Router();
const controller = require("../controller/MemberController");

router.post("/", controller.addMembers);
router.put("/:id", controller.updateMembers);
router.delete("/:id", controller.deleteMember);
router.get("/:company_id", controller.getMembers);

module.exports = router;
