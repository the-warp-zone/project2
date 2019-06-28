const router = require("express").Router();
var db = require("../../models");
var Sequelize = require("sequelize");

router.get("/", function(req, res) {
  console.log("Hello World: We are connected to DB");
});

router.get("/results/:publisher_name", function(req, res) {
  db.Survey.findAll({
    where: {
      publisher_name: req.params.publisher_name
    }
  }).then(function(dbSurvey) {
    //console.log(dbSurvey);
    res.json(dbSurvey);
  });
});
<<<<<<< HEAD
router.put("/update/:publisher_name", function(req, res) {
  // replace old function with sequelize function

  db.Survey.update(
    {
      yes_count: req.body.yes_count,
      no_count: req.body.no_count
    },
    {
      where: {
        publisher_name: req.params.publisher_name
      }
    }
  ).then(function(dbSurvey) {
    console.log(dbSurvey);
=======
router.post("/create/:publisher_name", function(req, res) {
  db.Survey.create({
    publisher_name: req.params.publisher_name,
    yes_count: req.body.yes_count,
    no_count: req.body.no_count
  }).then(function(dbSurvey) {
    //console.log(dbSurvey);
>>>>>>> abafb631373bda47b843d5b2e4710c0603e54807
    res.json(dbSurvey);
  });
});

module.exports = router;
