const router = require("express").Router();
const quizController = require("../../controller/QuizController");

// * route: /api/quizes

router.route("/")
    .post(quizController.create)
    .get(quizController.getAll);

router.route("/:id")
    .get(quizController.find)
    .delete(quizController.delete);


module.exports = router;