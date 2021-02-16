const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


/*GET*/
router.get("/add", (req, res, next) => {
  res.render("user/placeAdd.hbs");
});



module.exports = router;

