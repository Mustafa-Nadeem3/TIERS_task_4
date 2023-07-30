const express = require("express");
const router = express.Router();
const multer = require("multer");
const connection = require("../database/sql");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage });

router.post("/", upload.single("image"), (req, res, next) => {
  try {
    const title = req.body.title;
    const name = req.body.name;
    const image = req.file.filename;
    const blog = req.query.blog;
    console.log(title, name, image, blog);

    const data = {
      title: title,
      name: name,
      blog: blog,
      image: image,
    };
    console.log(data);

    connection.query("INSERT into blogs SET ?", data, (err, result) => {
      if (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ error: "Data not stored" });
      } else {
        console.log("Data stored");
        res.redirect("http://localhost:3000");
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Backend Database Connection Error" });
  }
});

module.exports = router;
