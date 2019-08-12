const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    topic: { type: String, required: true},
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Question"
        }
    ]
});

var Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;