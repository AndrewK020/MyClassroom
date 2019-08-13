const router = require("express").Router();
const questionController = require("../../controller/QuestionController");

// * route: /api/questions

router.route("/")
    .post(questionController.create);

router.delete("/:id", questionController.delete);

module.exports = router;