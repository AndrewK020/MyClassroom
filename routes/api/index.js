const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quizes");
const questionRoutes = require("./questions");


router.use("/users",userRoutes);
router.use("/quizes", quizRoutes);
router.use("/questions", questionRoutes);

module.exports = router;