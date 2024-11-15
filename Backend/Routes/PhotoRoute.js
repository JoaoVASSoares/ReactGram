const express = require("express");
const router = express.Router();

// Controller
const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhotos, searchPhotos } = require("../Controllers/PhotoController");

// Middleware
const { photoInsertValidation, photoUpdateValidation, commentValidation } = require("../Middleware/PhotoValidation");
const authGuard = require("../Middleware/AuthGuard");
const validate = require("../Middleware/HandleValidation")
const {imageUpload} = require("../Middleware/ImageUpload")

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhotos);
router.get("/:id", authGuard, getPhotoById);  
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put("/comment/:id", authGuard, commentValidation(), validate, commentPhotos);

module.exports = router