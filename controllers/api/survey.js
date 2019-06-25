const router = require("express").Router();
var db = require("../../models");
//get route -> index
router.get("/", function(req, res) {
  console.log("Hello World: We are connected to DB");
});

router.get("/results/", function(req, res) {
  // replace old function with sequelize function
  db.Survey.findAll({
    // where: {
    //   publisher_name: req.params.publisher_name
    // }
  })
    // use promise method to pass the burgers...
    .then(function(dbBurger) {
      // into the main index, updating the page
      res.json(dbSurvey);
    });
});
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
    res.json(dbSurvey);
  });
});

module.exports = router;
