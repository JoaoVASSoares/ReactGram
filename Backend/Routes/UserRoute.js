const express = require("express");
const router = express.Router();

// Controller
const {register, login, getCurrentUser, update, getUserById} = require("../Controllers/UserController");

// Middleware
const validate = require("../Middleware/HandleValidation");
const authGuard = require("../Middleware/AuthGuard")
const {useCreateValidation, loginValidation, userUpload} = require("../Middleware/UserValidation");
const { imageUpload } = require("../Middleware/ImageUpload");

// Routes
router.post("/register", useCreateValidation(), validate, register);
router.get("/profile", authGuard, getCurrentUser);
router.post("/login", loginValidation(), validate, login);
router.put("/", authGuard, userUpload(), validate, imageUpload.single("profileImage"), update)
router.get("/:id", getUserById);


module.exports = router