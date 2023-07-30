const express = require("express");
const router = express.Router();
const connection = require("../database/sql");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM blogs", (err, result) => {
    if (err) {
      console.error("Error occurred:", err);
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
