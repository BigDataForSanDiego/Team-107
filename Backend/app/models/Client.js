const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    coordinator: {
        type: Number,
        default: null
    },
    surveys: {
        type: Array,
        default: []
    }
});

// Hash password before saving
clientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;