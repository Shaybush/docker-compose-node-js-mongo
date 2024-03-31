const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {

  }
  catch (err) {

    console.log(err);
    res.status(500).json({ msg: "err", err });
  }
});

router.post("/", async (req, res) => {
  try {
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ msg: "err", err });
  }
});

module.exports = router;