const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const checkToken = require("../middleware/checkToken");
router.get("/", authController.getUser);
router.post("/", checkToken, authController.setupUser);
router.post("/register", authController.createNew);
router.post("/login", authController.login);

module.exports = router;
