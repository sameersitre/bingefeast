/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:
 */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
	res.render("index", { title: "Express" });
});

module.exports = router;
