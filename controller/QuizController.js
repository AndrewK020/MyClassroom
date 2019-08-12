const db = require("../models");

module.exports = {

    // params will contain user object id
    create: function(req, res) {
        const newQuiz = req.body.quiz;
        const userObjectId = req.body.id;

        db.Quiz.create(newQuiz)
            .then(function(dbQuiz) {
                return db.User.findOneAndUpdate({_id: userObjectId}, { $push: {quizes: dbQuiz._id} }, {new: true});
            })
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch( err => {
                res.json(err);
            });
    },

    getAll: function(req, res) {
        db.Quiz
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
