const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("*", (req, res) => {
  console.log("ea tut");
  ctx.body = fs.readFileSync(
    path.resolve(path.join("public", "index.html")),
    "utf8"
  );
});

module.exports = router;
