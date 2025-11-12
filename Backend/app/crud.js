const Answer = require("./models/Answer")
const User = require("./models/User");

// helper methods for accessing database
function store_answer(req){
    const { surveyId } = req.params;
    const body = req.body;
    const answers = body["answer"];
    const newAnswer = new Answer({surveyId, answers});
    const savedAnswer =  newAnswer.save();
    return savedAnswer;
}

async function create_user(req){
    const body = req.body;
    const username = body.username;
    const users = await User.find({username: username });
    if(users.length == 0){
        const password = body.password;
        const newUser = new User({username, password})
        const savedUser = newUser.save();
        return savedUser;
    }
    else{
        throw new Error('User already exists');
    }
}

module.exports = {store_answer, create_user};