var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  title: String,
  choices: [{
    answer: {type: String},
    isAnswer: {type: Boolean}
    }
  ],
});

var Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
