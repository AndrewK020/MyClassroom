const db = require("../models");

// * Defining User controller methods
module.exports = {
  
    create: function(req, res) {
        const newUser = req.body;
        db.User.create(newUser)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    delete: function(req, res) {
        db.User.remove({ _id: req.params.id }).then(function(dbUser) {
            res.json(dbUser);
        });
    },

    findByUserName: function(req, res) {
        db.User.find({ username: req.params.username }).then(function(dbUser) {
            res.json(dbUser);
        });
    },

    getAll: function(req, res) {
        db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    validate: function(req, res) {
        const reqUser = req.body;

        db.User.findOne({username: reqUser.username}, function(err, user) {
            if (err) throw err;
            user.comparePassword(reqUser.password, function(err, isMatch) {
                if (err) throw err;
                console.log(reqUser.password, isMatch);
                res.json({
                    isMatch: isMatch
                });
            });
        });
    }

};