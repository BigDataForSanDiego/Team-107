const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    physical: {
        type: Number,
        default: null
    },
    mental: {
        type: Number,
        default: null
    },
    social: {
        type: Number,
        default: null
    },
    financial: {
        type: Number,
        default: null
    },
    goals: {
        type: Number,
        default: null
    },
    selfDevelopment: {
        type: Number,
        default: null
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Dashboard = mongoose.model('Dasboard', dashboardSchema);

module.exports = Dashboard;