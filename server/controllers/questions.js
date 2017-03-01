var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports ={
    create :  function(req, res) {
        var quest = {
            _user: req.session.user,
            question: req.body.question,
            description: req.body.description
        };
        Question.create(quest, function(err, question){
            if (err) {
                res.json({
                    errors: {
                        ask_question: {
                            message: "Question Must be atleast 10 Characters Long ",
                        }
                    },
                    name: "Validation error"
                });
            } else {
                res.json(question);
            }
        });
    },

    index : function(req, res) {
        Question.find({}, function(err, questions){
            if (err) {
                res.json(err);
            } else {
                res.json(questions);
            }
        });
    },

    get  : function(req, res) {
        Question.findOne({_id: req.params.id}, function(err, question){
            if (err) {
                res.json(err);
            } else {
                res.json(question);
            }
        });
    }
}
