const express = require("express");
const router = express.Router();
const db = require("../db");


// ✅ GET all users
router.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});


// ✅ CREATE new user
router.post("/", (req, res) => {
    const { name, email } = req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: "User created", id: result.insertId });
    });
});


module.exports = router;