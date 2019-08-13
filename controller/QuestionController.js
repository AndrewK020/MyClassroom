const db = require("../models");

module.exports = {

    create: (req, res) => {
        const newQuestion = req.body.question;
        const quizObjectId = req.body.id;
     
        db.Question.create(newQuestion)
            .then(dbQuestion => {
                return db.Quiz.findOneAndUpdate(
                    {_id: quizObjectId}, 
                    {$push: {questions: dbQuestion._id}},
                    {new: true} );
            }).then(dbQuiz => {
                res.json(dbQuiz);
            }).catch( err => {
                res.json(err);
        });
    },
    delete: (req, res) => {
        db.Question.remove({ _id: req.params.id }).then(dbQuestion => {
            res.json(dbQuestion);
        });
    }
}