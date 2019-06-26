const router = require("express").Router();
var db = require("../../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//get route -> index
router.get("/", function(req, res) {
  console.log("Hello World: We are connected to DB");
});

router.get("/results/:publisher_name", function(req, res) {
  // replace old function with sequelize function
  db.Survey.findAll({
    
    where: {
      publisher_name: req.params.publisher_name
     
    }
  })
    // use promise method to pass the burgers...
    .then(function(dbSurvey) {
      // into the main index, updating the page
      console.log(dbSurvey);
      res.json(dbSurvey);
    });
  // db.Survey.count({
  //   where: {
  //     publisher_name: req.params.publisher_name,
  //     [Op.or]: [{yes_count: 1}, {no_count: 1}]
  //   },
  //   distinct: false,
    
  // })
  // .then(function(dbSurvey) {
  //     // count is an integer
      
  //     res.json(dbSurvey);
  // });

});
router.post("/create/:publisher_name", function(req, res) {
  // replace old function with sequelize function
  
  db.Survey.create(
    {
      publisher_name: req.params.publisher_name,
      yes_count: req.body.yes_count,
      no_count: req.body.no_count
    }).
    then(function(dbSurvey) {
      console.log(dbSurvey)
    res.json(dbSurvey);
  });
});

module.exports = router;
