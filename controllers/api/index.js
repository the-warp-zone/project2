const router = require("express").Router();
const surveyRoutes = require("./survey");

// Book routes
router.use("/burger", surveyRoutes);

module.exports = router;
