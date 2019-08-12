const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quizes");

router.use("/users",userRoutes);
router.use("/quizes", quizRoutes);

module.exports = router;