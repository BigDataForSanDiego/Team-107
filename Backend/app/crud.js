const Answer = require("./models/Answer");
const Client = require("./models/Client");
const Dashboard = require("./models/Dashboard");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//const Counter = require("./models/Counter");

// helper methods for accessing database
async function store_answer(req){
    const { surveyId } = req.params;
    const existingSurveys = await Answer.findOne({surveyId: surveyId});
    if(!existingSurveys){
        const body = req.body;
        const answers = body["answer"];
        const clientId = await getClientIdFromToken(req);
        const newAnswer = new Answer({clientId, surveyId, answers});
        const updatedClient = await Client.findByIdAndUpdate(
            clientId,
            {$push: {surveys: surveyId}}
        );
        const savedAnswer =  newAnswer.save();
        return savedAnswer;
    }
    else{
        throw new Error('Survey with same ID already exists'); 
    }
}

async function create_user(req){
    const body = req.body;
    const username = body.username;
    const users = await Client.findOne({username: username });
    if(!users){
        const password = body.password;
        const newClient = new Client({username, password})
        const savedClient = newClient.save();
        const clientDashboard = new Dashboard({clientId: newClient._id});
        const newDashboard = clientDashboard.save();
        return savedClient, clientDashboard;
    }
    else{
        throw new Error('Client already exists');
    }
}

function getClientIdFromToken(req, res) {
  return new Promise((resolve, reject) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return resolve(null);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return resolve(null);
      resolve(decoded.userId);
    });
  });
}

async function delete_client(req, res){
    const id = await getClientIdFromToken(req, res);
    const deletedDashboard = await Dashboard.findOneAndDelete({clientId: id});
    const deletedClient = await Client.findOneAndDelete({_id: id});
    return deletedClient;
}

module.exports = {store_answer, create_user, getClientIdFromToken, delete_client};