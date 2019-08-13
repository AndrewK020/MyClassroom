const db = require("../models");

module.exports = {

    create: function(req, res) {
        const newQuiz = req.body.quiz;
        const userObjectId = req.body.id;

        db.Quiz.create(newQuiz)
            .then(function(dbQuiz) {
                return db.User.findOneAndUpdate({_id: userObjectId}, { $push: {quizes: dbQuiz._id} }, {new: true});
            })
            .then(dbUser => {
                res.json(dbUser);
            }).catch( err => {
                res.json(err);
            });
    },
// params will contain user object id
    delete: (req, res) => {
        console.log("hit");
        db.Quiz.remove({ _id: req.params.id }).then((dbQuiz) => {
            res.json(dbQuiz);
        });
    },

    getAll: function(req, res) {
        db.Quiz
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
