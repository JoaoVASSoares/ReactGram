const express = require("express");
const router = express();

// Controllers
router.use("/api/users", require("./UserRoute"));
router.use("/api/photos", require("./PhotoRoute"));

// Test route
router.get("/", (req, res) => {
    res.send("API Working!");
})


module.exports = router