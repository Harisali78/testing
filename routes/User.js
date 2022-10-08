const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/User");
router.get("/users", getAllUsers);

module.exports = router;
