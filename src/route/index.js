const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
      title: "`Projeto Final - Biblioteca caseira`",
      version: "2.0.0"
    })
  })

module.exports = router