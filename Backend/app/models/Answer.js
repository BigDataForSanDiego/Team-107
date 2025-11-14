const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    clientId:{
        type: String,
        required: true,
    },
    surveyId: {
        type: Number,
        required: true,
    },
    //store answers as json object
    answers: Object,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Answer = mongoose.model('Surveys', answerSchema);

module.exports = Answer;