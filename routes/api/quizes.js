const router = require("express").Router();
const quizController = require("../../controller/QuizController");

// * route: /api/quizes

router.route("/").get(quizController.getAll);

router.route("/")
    .post(quizController.create);

module.exports = router;