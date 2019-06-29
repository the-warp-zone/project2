const router = require("express").Router();
const surveyRoutes = require("./survey");

router.use("/survey", surveyRoutes);

module.exports = router;
