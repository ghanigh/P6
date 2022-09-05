const express = require("express");
const router = express.Router();

const CtrlUser = require("../Controlleurs/CtrlUser");

router.post("/signup", CtrlUser.signup);
router.post("/login", CtrlUser.login);

module.exports = router;