var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({

    answer: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
    },

    details: {
        type: String,
        trim: true
    },

    likes: {
        type: Number,
        default: 0
    },

    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},

}, { timestamps: true });

var Answer = mongoose.model("Answer", AnswerSchema);
