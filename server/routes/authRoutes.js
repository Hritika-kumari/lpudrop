const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

// Public routes for user authentication
router.post("/register", registerController);

router.post("/login", loginController);

// Protected route requiring authentication middleware
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
