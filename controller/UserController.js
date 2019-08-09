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

    find: function(req, res) {
        db.User.find({ _id: req.params.id }).then(function(dbUser) {
        res.json(dbUser);
        });
    }


};