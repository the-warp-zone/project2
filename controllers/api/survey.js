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

router.post("/create/:publisher_name", function(req, res) {
  db.Survey.create({
    publisher_name: req.params.publisher_name,
    yes_count: req.body.yes_count,
    no_count: req.body.no_count
  }).then(function(dbSurvey) {
    //console.log(dbSurvey);
    res.json(dbSurvey);
  });
});

module.exports = router;
